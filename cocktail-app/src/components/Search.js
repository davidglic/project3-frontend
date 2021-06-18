import React,{Component} from "react";
import {Link} from "react-router-dom";
import axios from "axios";


function RenderLetters(props) {
    //generates <div>A</div> to Z with onClick link to trigger API and update. returns a list of div elements.
    //requires letterClick function from parent element.

    let letters = []
    for (let i=65; i < 91; i++) {
        let letter = String.fromCharCode(i)
        letters.push(<div onClick={() => props.letterClick(letter)}  className="letter">{letter}</div>)
    }
    return (
        <div className="alphabet">
        {[letters]}
        </div>
        )
}

class Search extends Component {
    constructor (props) {
        super (props)
        this.state = {
            searchBar: '',
            searchIng: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        
    }
    letterClick = (letter) => {
        //pass search letter up to parent to call API and update drinkStream
        this.props.searchDrinksLetter(letter)
    }
    

    render () {
        
    return (
        <div className="search-container search">
            <button value="Random Drink" onClick={this.props.searchRandom} className="button">Random Drink</button>
            <h3 className="search-title">Search by Drink Name:</h3>
            <input  className="button"
                    type="text"
                    name="searchBar"
                    value={this.state.searchBar}
                    placeholder="search"
                    onChange={this.handleChange}/> 

                <input
                    className="button"
                    type="submit"
                    value="Search!"
                    onClick={() => this.props.searchDrinks(this.state.searchBar)}/>

            <h3 className="search-title">Search by ingredient:</h3>

            <input  className="button"
                    type="text"
                    name="searchIng"
                    value={this.state.searchIng}
                    placeholder="search"
                    onChange={this.handleChange}/> 
                    
                <input
                    className="button"
                    type="submit"
                    value="Search!"
                    onClick={() => this.props.searchIngredients(this.state.searchIng)}/>

            <h3 className="search-title">Search by First Letter of Drink:</h3>

            <RenderLetters letterClick={this.letterClick}/>
            
        </div>
    )
}
}

export default Search;