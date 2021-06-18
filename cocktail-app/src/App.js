//imports

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
import apiKey from './resources/keys' //apikey stored here if not using free. this folder is in .gitignore for security.
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
    //handle login event. pass password as object {password: ''}, and username as a param.

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
    // handle log out. Clear state and push to home page.

    if (event) {event.preventDefault()} //only needs to run on login event, on delete user will throw error.
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
    //updates session state, used for profile updates, new user creations, etc.

    this.setState({
      username: username,
      name: name,
      loggedIn: true
    })
  }

  updateFavs = (list) => {
    //updates fav list. allows fav list to update outside of backend api call.

    this.setState({
      favList: list
    })
  }

  addFavDrink = (drinkId, drinkName, userName) => {
    //add drink to favorites, updates backend api and adds drink to fav list in state.

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
    //Remove drink from favorites, updates backend api and removes drink from fav list in state.

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
    //search drinks by name, takes string. updates drinkList in state.
    //sample API query: https://www.thecocktaildb.com/api/json/v1/1/search.php?s=mojito

         axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${string}`)
        .then(response => {
          
          if (response.data.drinks != null) { 
            this.setState({
                  drinkList:response.data.drinks
              })
          } else {
            this.setState({drinkList: [{idDrink: '', strDrinkThumb: '', strDrink: 'No drinks found...'}]})
          }
        })
  }

  searchDrinksLetter = (string) => {
    //search drinks by first letter of name, takes string. updates drinkList in state.
    //string must be one character or external API will reject.
    ////sample API query: https://www.thecocktaildb.com/api/json/v1/1/search.php?f=A

    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${string}`)
        .then(response => {
          
          if (response.data.drinks != null) { 
            this.setState({
                  drinkList:response.data.drinks
              })
          } else {
            this.setState({drinkList: [{idDrink: '', strDrinkThumb: '', strDrink: 'No drinks found...'}]})
          }
        })
  }
  searchIngredients = (string) => {
    //search drinks that contain ingredient. takes string.
    //sample API query: www.thecocktaildb.com/api/json/v1/1/filter.php?i=gin

    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${string}`)
        .then(response => {
          
          if (response.data.drinks != null) { 
            this.setState({
                  drinkList:response.data.drinks
              })
          } else {
            this.setState({drinkList: [{idDrink: '', strDrinkThumb: '', strDrink: 'No drinks found...'}]})
          }
        })

  }

  searchRandom = () => {
    //search random cocktail from DB. 
    //sample API query: www.thecocktaildb.com/api/json/v1/1/random.php

    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
        .then(response => {
          if (response.data.drinks != null) { 
            this.setState({
                  drinkList:response.data.drinks
              })
          } else {
            this.setState({drinkList: [{idDrink: '', strDrinkThumb: '', strDrink: 'No drinks found...'}]})
          }
        })
  }

  render() {
    return (
      <div className="App">

        {/* Header Component */}
        <Header 
          name={this.state.name} 
          username={this.state.username} 
          loggedIn={this.state.loggedIn} 
          onLogin={this.onLogin}
          onLogout={this.onLogout}
          
        />
        
        <div className="content"> {/* content container for styling. */}
        
        {/* Landing page with DrinkStream for expample. */}
        <Route
          path="/"
          exact render={() => 
          <div> 
          <Landing searchDrinks={this.searchDrinks}/>
          <DrinkStream drinkList={this.state.drinkList}/> 
          </div> 
        }
        />

        {/* User Signup Page */}
        <Route
          path ="/signup"
          render={(props) => <Signup 
            username={this.state.username} 
            loggedIn={this.state.loggedIn} 
            {...props} 
            updateState={this.updateState}/>}
        />

        {/* User Profile Page */}
        <Route
          path="/profile/:username"
          render={(props) => 
          <Profile {...props} 
          username={this.state.username} 
          updateState={this.updateState} 
          updateFavs={this.updateFavs} 
          onLogout={this.onLogout}/>}
        />
       
        {/* Search dialog and DrinkStream for results */}
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

        {/* Individual Drink */}
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
      </div>
    );
  }
   
}

export default withRouter(App);
