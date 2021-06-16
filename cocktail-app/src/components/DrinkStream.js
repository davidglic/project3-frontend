import React, {Component} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

class DrinkStream extends Component {
    constructor () {
        super ()
        
        this.state = {
            drinks:[]
        }

    }

    componentDidMount = () => {
        axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
        .then(response => {
            this.setState({
                drinks:response.data.drinks
            })
        })
    }


    render () {
        console.log(this.state.drinks)
    return (
        <div>
            <h1> Margaritas</h1> 
            <Link
                to="/search">Search</Link> 
            <Link
                to="/drink/:id">Drink:</Link>
            <div className="container">
                {this.state.drinks.map(drinks => {
                     return (
            <Link
                to={`/drink/${drinks.idDrink}`}>
            <div className="each">
                <img src= {drinks.strDrinkThumb} height="200px"/>
                <p>{drinks.strDrink}</p>
            </div>
            </Link>               
                )
            })}
              </div> 

        </div>
    )
}
}

export default DrinkStream;