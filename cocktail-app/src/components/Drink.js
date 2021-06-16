import React, {Component} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

class Drink extends Component {
    constructor (props) {
        super (props)

        this.state= {
            drink:[]
        }

    }
    componentDidMount = () => {
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007`)
        .then(response => {
            this.setState({
                drink:response.data.drink
            })
        })
    }


    render () {
    return (
        <div>
            <h1>Drinks:</h1> 

        </div>
    )
}
}

export default Drink;