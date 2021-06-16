import React, {Component} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import DrinkStream from "./DrinkStream";

class Drink extends Component {
    constructor (props) {
        super (props)

        this.state= {
            drink:[],
            recievedDrink: false
        }

    }
    componentDidMount = () => {
        console.log(this.props)
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${this.props.match.params.id}`)
        .then(response => {
            console.log(response.data)
            this.setState({
                drink:response.data.drinks[0],
                recievedDrink:true
            })
        })
    }


    render () {
        console.log(this.state.drink)
    return (
        <div>
            {this.state.recievedDrink &&
            <div>
                {this.state.drink.strDrink} <br></br>
                {this.state.drink.strIngredient1}
                {this.state.drink.strIngredient4}

            </div>
            }
        </div>
    )
}
}

export default Drink;