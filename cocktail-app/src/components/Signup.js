import axios from "axios";
import React, {Component} from "react";
import {Link, Route} from "react-router-dom"; 

class Signup extends Component{
    constructor(props) {
        super (props)
        
    }
    
    handleSubmit = (event) => {
        event.preventDefault()
        //check pw and email
        if (event.target.email.value != event.target.email2.value) {
            alert("Emails do not match")
            return
        }
        if (event.target.password.value != event.target.password2.value) {
            alert("Passwords do not match")
            return
        }
        
        //check if username exists.
        axios.get(`http://localhost:3001/user/${event.target.username.value}`)
            .then(resp => {
                if (resp.data === null) {
                    
                    const newUser = {
                        name: event.target.name.value,
                        username: event.target.username.value,
                        password: event.target.password.value,
                        email: event.target.email.value
                    }

                    //post new user to backend.
                    axios.post(`http://localhost:3001/user/new`, newUser)
                        .then(response => {
                            this.props.updateState(response.data.username, response.data.name)
                            this.props.history.push(`/profile/${response.data.username}`)
                        }).catch(err => {
                            console.log(err)
                        })
                } else {
                    alert("Username in use.")
                }
            })
        
    }

render () {
    return(
        <div className="signup-container">
            <div className="signupInfo search-container">
            <h2>Create a new account.</h2>
            
            <form onSubmit={this.handleSubmit}>
                Username: <input
                    className="button-head"
                    type="text"
                    name="username"
                    /><br/>
                    
                Password: <input
                    className="button-head"
                    type="password"
                    name="password"
                    /><br/>
                Confirm Password: <input
                    className="button-head"
                    type="password"
                    name="password2"
                    /><br/>
                Full Name: <input
                    className="button-head"
                    type="text"
                    name="name"
                    /><br/>
               E-Mail: <input
                    className="button-head"
                    type="text"
                    name="email"
                    /> <br/>
                Confirm E-mail : <input
                    className="button-head"
                    type="text"
                    name="email2"
                    /> <br/>  
                <input
                    className="button-head"
                    type="submit"
                    value="Sign Up!"/>                  

            </form>
            </div>
        </div>
    )
}
}

export default Signup;