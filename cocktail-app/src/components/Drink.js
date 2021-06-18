import React, {Component} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import DrinkStream from "./DrinkStream";

class Drink extends Component {
    constructor (props) {
        super (props)

        this.state= {
            drink:[],
            recievedDrink: false,
            DBid: ''
        }

    }
    componentDidMount = () => {
        //run api call for cocktail details on load.
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${this.props.match.params.id}`)
        .then(response => {
            
            this.setState({
                drink:response.data.drinks[0],
                recievedDrink:true
            })
        })
    }
    
    favID = '' //storing favID--from backend API--here allows to manipulate DB without external API call.
    
    checkFavs = (id) => {
        //checks to see if drink is in fav List by external API drink ID.
        //returns true or false.

        for (let i=0; i < this.props.favList.length; i++) {
            
            if (this.props.favList[i].drinkID == id) {
                this.favID = this.props.favList[i].id
                return true
            }
        }
        return false
    }

    render () {
        
        
    return (
    <div className="drinkInfo">
        {this.state.recievedDrink && 
        <div>
            <h1>{this.state.drink.strDrink} </h1> <br></br>
            <img 
                className="drink-pic"
                src={this.state.drink.strDrinkThumb}
            />
        <div className="container">    
            <div className="ingredientContainer">
                <h3 className="drinkTitle">Glass:</h3>
                <p className="glass">{this.state.drink.strGlass}</p>
                <h3 className="drinkTitle">Ingredients:</h3>
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
                <h3 className="drinkTitle">Instructions:</h3>
                <p className="instructions">{this.state.drink.strInstructions}</p>
            </div> 
        </div> 

            </div>
            }
            {this.checkFavs(this.state.drink.idDrink) 

            
            ? <button className="button" 
            onClick={() => this.props.delFavDrink(this.favID)}>Remove from Favorites</button>
            : <button className="button"
            onClick={() => this.props.addFavDrink(this.state.drink.idDrink, this.state.drink.strDrink, this.props.username)}>Add to Favorites</button>}
            
        </div>
    )
}
}

export default Drink;