import React, {Component} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

class DrinkStream extends Component {
    constructor (props) {
        super (props)
    }

    render () {
    
    //loop through and render each drink in state with picture and name, linked to cocktailDB ID.
    return (
        <div>
            <div className="container">
                {this.props.drinkList.map(drinks => {
                     return (
            <Link
                to={`/drink/${drinks.idDrink}`}>
            <div className="each">
                <img 
                    className="pics"
                    src= {drinks.strDrinkThumb}/>
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