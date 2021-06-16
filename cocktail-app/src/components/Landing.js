import React, {Component} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

class Landing extends Component {
    constructor () {
        super ()

    }


    render () {
    return (
        <div>
            <h1> Drink Stream:</h1> 
            <Link
                to="/drinkstream">Drink Stream</Link>
          

        </div>
    )
}
}

export default Landing;