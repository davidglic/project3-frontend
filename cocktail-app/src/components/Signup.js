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
        axios.get(`http://localhost:3001/user/${event.target.username.value}`)
            .then(resp => {
                if (resp = null) {
                    const newUser = {
                        name: event.target.name.value,
                        username: event.target.username.value,
                        password: event.target.password.value,
                        email: event.target.email.value
                    }
                    axios.post(`http://localhost:3001/user/new`, newUser)
                        .then(response => {
                            console.log(response.data)
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
        <div>
            
            <h2>Create a new account.</h2>
            
            <form onSubmit={this.handleSubmit}>
                Username: <input
                    type="text"
                    name="username"
                    /><br/>
                    
                Password: <input
                    type="password"
                    name="password"
                    /><br/>
                Confirm Password: <input
                    type="password"
                    name="password2"
                    /><br/>
                Full Name: <input
                    type="text"
                    name="name"
                    /><br/>
               E-Mail: <input
                    type="text"
                    name="email"
                    /> <br/>
                Confirm E-mail : <input
                    type="text"
                    name="email2"
                    /> <br/>  
                <input
                    type="submit"
                    value="Sign Up!"/>
                    

            </form>
        </div>
    )
}
}

export default Signup;