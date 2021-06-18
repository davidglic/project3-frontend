import React, {Component} from "react";
import {Link} from "react-router-dom";
// import axios from "axios";

class Landing extends Component {
    constructor (props) {
        super (props)

    }

    componentDidMount() {
        this.props.searchDrinks("margarita")
    }
    render () {
    return (
        <div className="landing-text search-container">
            <h1> Welcome to the Cocktail App.</h1>
            <p>Login or sign up above to search the library.</p> 
            <p>A sample search for margaritas:</p>
        
        </div>
    )
}
}

export default Landing;