import React, {Component} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

class Profile extends Component {
    constructor (props) {
        super (props)
        this.state ={
            name: '',
            username: '',
            password: '',
            email: '',
            drink: '',
            favList: [],
        }
    }
    
    handleChange = (event) => {

        this.setState({
            [event.target.name]: event.target.value
        })
        
    }

    fetchProfile = () => {
        //fetch user data from backend.
        
        axios.get(`http://localhost:3001/user/${this.props.username}`)
            .then(resp => {
               
                this.setState({
                    name: resp.data.name,
                    username: resp.data.username,
                    password: resp.data.password,
                    email: resp.data.email
                })
                
            })
    }

    fetchFavorites = () => {
        //fetch favorites from backend.

        axios.get(`http://localhost:3001/drink/${this.props.username}`)
        .then(resp => {
            
            this.setState({
                favList:resp.data
            })
            this.props.updateFavs(this.state.favList)
        })
        
    }

    componentDidMount =() => {

        this.fetchProfile();
        this.fetchFavorites();
    }

    onSubmit = (event) => {
        //update backend API with edited info then update state with new.

        event.preventDefault()
        axios.put(`http://localhost:3001/user/${this.props.username}`, this.state)
            .then(resp => {
                
                this.props.updateState(this.state.username, this.state.name)
            })
        
    }
    handleDeleteUser = () => {
        //delete and logout user. 

        axios.delete(`http://localhost:3001/user/${this.props.username}`)
        .then(() =>{
            this.props.onLogout()
        })
    }

    render () {
        const favList = this.state.favList.map(drink =>{
            return(
                <div>
                    <Link to={`/drink/${drink.drinkID}`}>
                        {drink.name}
                    </Link>
                                                              
                </div>
                
            )
        })
    return (
    <div className="info">
        <div className="profile search-container">
            <h1> Profile:</h1>
            <p> {this.state.username} </p>
            <form onSubmit={this.onSubmit}>
                name:<input 
                    className="button-head"
                    type="text" 
                    name="name" 
                    value={this.state.name} 
                    onChange={this.handleChange}/> <br></br>
                password:<input 
                    className="button-head"
                    type="password"  
                    name="password" 
                    value={this.state.password} 
                    onChange={this.handleChange}/> <br></br>
                email:<input 
                    className="button-head"
                    type="text" 
                    name="email" 
                    value={this.state.email} 
                    onChange={this.handleChange}/> <br></br>
                <input 
                    className="button-head"
                    type="submit" 
                    value="Submit Changes" /> <br></br>
            </form>
            <button
                    className="button-head"
                    type="submit" 
                    value="Delete Profile" 
                    onClick={this.handleDeleteUser}>Delete User?</button>
        </div>
        <div>
            <form className="favs search-container">
                <h1>Favorite List:</h1>
                {favList} 
            </form>            
        </div>
    </div>
    )
}
}

export default Profile;