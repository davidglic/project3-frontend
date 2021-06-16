import './App.css';
import {Link, Route} from "react-router-dom";
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
      streamList: [],
      favList: [],
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
      }

      )
  }
  onLogout = (event) => {
    event.preventDefault()
    this.setState({
      name: '',
      username: '',
      streamList: [],
      favList: [],
      loggedIn: false
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
          exact render={() => <Landing/>}
        />
        <Route
          path ="/signup"
          render={() => <Signup/>}
        />
        <Route
          path="/profile/:username"
          render={() => <Profile/>}
        />
        <Route
          path="/drinkstream"
          render={() => <DrinkStream/>}
        />
              <Route
          path="/search"
          render={() => <Search/>}
        />
        <Route
          path="/drink/:id"
          render={() => <Drink/>}
        />
      </div>
    );
  }
   
}

export default App;
