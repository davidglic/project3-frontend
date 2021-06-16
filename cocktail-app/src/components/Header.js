import React, {Component} from "react";
import {Link} from "react-router-dom";


class Header extends Component{
    constructor(props) {
        super (props)
    }

    

    render () {
        return (
            
        <div>
            {this.props.loggedIn === true ?
                <div className="header">
                    <div className="head-left">
                <h1 className="title">Cocktail App</h1>
                <Link to="/search">Search</Link>
            </div>
        <div className="head-right">
            <div className="login-container">
                <h4>Welcome, {this.props.name}</h4>
                <Link to={`/profile/${this.props.username}`}>Profile</Link><br/>
                <Link onClick={this.props.onLogout}>Logout</Link>
            </div>
        </div>
                </div>  
            :
                <div className="header">
                    <div className="head-left">
                <h1 className="title">Cocktail App</h1>
                
            </div>
        <div className="head-right">
            <div className="login-container">
                <form onSubmit={this.props.onLogin}>
                    <input type="text" placeholder="Username" name="username" />
                    <input type="password" placeholder="password" name="password" />
                    <input type="submit" value="Login" />
                </form>
            </div>
            <Link
                to="/signup">Sign Up!</Link>
        </div>
                </div>    
        }
        </div>
            
        )
    }
}

export default Header;