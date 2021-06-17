import React, {Component} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

class DrinkStream extends Component {
    constructor (props) {
        super (props)
        
        this.state = {
            drinks:[]
        }

    }

    // componentDidMount = () => {
    //     axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
    //     .then(response => {
    //         this.setState({
    //             drinks:response.data.drinks
    //         })
    //     })
    // }


    render () {
        console.log(this.state.drinks)
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