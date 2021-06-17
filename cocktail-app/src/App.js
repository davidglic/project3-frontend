import './App.css';
import {Link, Route, withRouter} from "react-router-dom";
import Header from './components/Header';
import Signup from './components/Signup';
import Landing from './components/Landing';
import Profile from './components/Profile';
import DrinkStream from './components/DrinkStream';
import Search from './components/Search';
import Drink from './components/Drink';
import React, { Component } from 'react';
import apiKey from './resources/keys'
import axios from 'axios';





class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      username: '',
      favList: [],
      drinkList: [],
      loggedIn: false
    }
  }

  onLogin = (event) => {
    event.preventDefault()
    
    const params = {password: event.target.password.value}
    
    axios.put(`http://localhost:3001/user/login/${event.target.username.value}`, params)

      .then(response => {
        this.setState({
          name: response.data.name,
          username: response.data.username,
          loggedIn: true
        })
      this.props.history.push(`/profile/${response.data.username}`)
      }

      )
  }
  onLogout = (event) => {
    if (event) {event.preventDefault()}
    this.setState({
      name: '',
      username: '',
      drinkList: [{idDrink: '', strDrinkThumb: '', strDrink: 'Loading...'}],
      favList: [],
      loggedIn: false
    })
    this.props.history.push('/')
  }
  updateState = (username, name) => {
    this.setState({
      username: username,
      name: name,
      loggedIn: true
    })
  }

  updateFavs = (list) => {
    this.setState({
      favList: list
    })
  }

  addFavDrink = (drinkId, drinkName, userName) => {
    const newDrink = {name: drinkName, drinkID: drinkId}
    axios.post(`http://localhost:3001/drink/${userName}`, newDrink)
      .then(response => {
        axios.get(`http://localhost:3001/drink/${userName}`)
        .then(resp => {
            
            this.setState({
                favList:resp.data
            })
            
        })
      })
  }

  delFavDrink = (drinkId) => {
    console.log("delete drink called" + drinkId)
    axios.delete(`http://localhost:3001/drink/${drinkId}`)
    .then(response => {
      axios.get(`http://localhost:3001/drink/${this.state.username}`)
      .then(resp => {
          
          this.setState({
              favList:resp.data
          })
          
      })
    })
  }

  searchDrinks = (string) => {
         axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${string}`)
        .then(response => {
          // console.log(response.data.drinks)
            this.setState({
                drinkList:response.data.drinks
            })
        })
  }
  searchDrinksLetter = (string) => {
    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${string}`)
        .then(response => {
          // console.log(response.data.drinks)
            this.setState({
                drinkList:response.data.drinks
            })
        })
  }
  searchIngredients = (string) => {
    //www.thecocktaildb.com/api/json/v1/1/filter.php?i
    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${string}`)
        .then(response => {
          // console.log(response.data.drinks)
            this.setState({
                drinkList:response.data.drinks
            })
        })

  }

  searchRandom = () => {
    //www.thecocktaildb.com/api/json/v1/1/random.php
    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
        .then(response => {
          // console.log(response.data.drinks)
            this.setState({
                drinkList:response.data.drinks
            })
        })
  }

  render() {
    return (
      <div className="App">
        <Header 
          name={this.state.name} 
          username={this.state.username} 
          loggedIn={this.state.loggedIn} 
          onLogin={this.onLogin}
          onLogout={this.onLogout}
          
        />
        <Route
          path="/"
          exact render={() => 
          <div> 
          <Landing searchDrinks={this.searchDrinks}/>
          <DrinkStream drinkList={this.state.drinkList}/> 
          </div> 
        }
        />
        <Route
          path ="/signup"
          render={(props) => <Signup username={this.state.username} loggedIn={this.state.loggedIn} {...props} updateState={this.updateState}/>}
        />
        <Route
          path="/profile/:username"
          render={(props) => 
          <Profile {...props} 
          username={this.state.username} 
          updateState={this.updateState} 
          updateFavs={this.updateFavs} 
          onLogout={this.onLogout}/>}
        />
        {/* <Route
          path="/drinkstream"
          render={() => <DrinkStream drinkList={this.state.drinkList}/>}
        /> */}
              <Route
          path="/search"
          render={(props) => 
          <div>
          <Search {...props} 
          searchDrinks={this.searchDrinks}
          searchDrinksLetter={this.searchDrinksLetter}
          searchRandom={this.searchRandom}
          searchIngredients={this.searchIngredients}
          />
          <DrinkStream drinkList={this.state.drinkList}/> 
          </div>
          }
        />
        <Route
          path="/drink/:id"
          render={(props) => <Drink 
          username={this.state.username}
          {...props} 
          favList={this.state.favList}
          addFavDrink={this.addFavDrink}
          delFavDrink={this.delFavDrink}
          />
        }
        />
      </div>
    );
  }
   
}

export default withRouter(App);
