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
            <h1>{this.state.drink.strDrink} </h1> <br></br>
            <img 
                className="pics"
                src={this.state.drink.strDrinkThumb}
            />
        <div className="container">    
            <div className="ingredientContainer">
                <h3>Glass:</h3>
                <p className="instructions">{this.state.drink.strGlass}</p>
                <h3>Ingredients:</h3>
                <ul className="ingredients"> 
                    {this.state.drink.strIngredient1 != null &&
                    <li>
                         {this.state.drink.strMeasure1} {this.state.drink.strIngredient1}                        
                    </li>
                    }
                    {this.state.drink.strIngredient2 != null &&
                    <li>
                        {this.state.drink.strMeasure2} {this.state.drink.strIngredient2}                        
                    </li>
                    }
                    {this.state.drink.strIngredient3 != null &&
                    <li>
                       {this.state.drink.strMeasure3} {this.state.drink.strIngredient3}                         
                    </li>
                    }
                    {this.state.drink.strIngredient4 != null &&
                    <li>                        
                        {this.state.drink.strMeasure4} {this.state.drink.strIngredient4} 
                    </li>
                    }
                    {this.state.drink.strIngredient5 != null &&
                    <li>                        
                        {this.state.drink.strMeasure5} {this.state.drink.strIngredient5} 
                    </li>
                    }
                    {this.state.drink.strIngredient6 != null &&
                    <li>                         
                        {this.state.drink.strMeasure6} {this.state.drink.strIngredient6}
                    </li>
                    }
                    {this.state.drink.strIngredient7 != null &&
                    <li>                        
                        {this.state.drink.strMeasure7} {this.state.drink.strIngredient7} 
                    </li>
                    }
                    {this.state.drink.strIngredient8 != null &&
                    <li>                        
                        {this.state.drink.strMeasure8} {this.state.drink.strIngredient8} 
                    </li>
                    }
                    {this.state.drink.strIngredient9 != null &&
                    <li>                         
                        {this.state.drink.strMeasure9} {this.state.drink.strIngredient9}
                    </li>
                    }
                    {this.state.drink.strIngredient10 != null &&
                    <li>                         
                        {this.state.drink.strMeasure10} {this.state.drink.strIngredient10}
                    </li>
                    }
                    {this.state.drink.strIngredient11 != null &&
                    <li>                        
                        {this.state.drink.strMeasure11} {this.state.drink.strIngredient11} 
                    </li>
                    }
                    {this.state.drink.strIngredient12 != null &&
                    <li>                         
                        {this.state.drink.strMeasure12} {this.state.drink.strIngredient12}
                    </li>
                    }
                    {this.state.drink.strIngredient13 != null &&
                    <li>                        
                        {this.state.drink.strMeasure13} {this.state.drink.strIngredient13} 
                    </li>
                    }
                    {this.state.drink.strIngredient14 != null &&
                    <li>                        
                        {this.state.drink.strMeasure14} {this.state.drink.strIngredient14} 
                    </li>
                    }
                    {this.state.drink.strIngredient15 != null &&
                    <li>
                        {this.state.drink.strMeasure15} {this.state.drink.strIngredient15} 
                    </li>
                    }
                </ul> 
            </div>
            <div className="instructionContainer">
                <h3>Instructions:</h3>
                <p className="instructions">{this.state.drink.strInstructions}</p>
            </div> 
        </div> 
            </div>
            }
        </div>
    )
}
}

export default Drink;