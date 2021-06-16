import React, {Component} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

class DrinkStream extends Component {
    constructor () {
        super ()

    }


    render () {
    return (
        <div>
            <h1> Drink Stream:</h1> 
            <Link
                to="/search">Search</Link> <br>
                </br>
            <Link
                to="/drink/:id">Drink:</Link>
          

        </div>
    )
}
}

export default DrinkStream;