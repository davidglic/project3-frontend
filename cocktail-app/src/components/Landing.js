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
        <div>
            <h1> Welcome To Drink Stream:</h1> 
        
        </div>
    )
}
}

export default Landing;