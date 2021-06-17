import React,{Component} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

// function generateLetters() {
//     let letters = []
//     for (let i=65; i < 91; i++) {
        
//         letters.push(String.fromCharCode(i))
//     }
//     return letters
// }
function RenderLetters(props) {
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
            searchBar: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        
    }
    letterClick = (letter) => {
        this.props.searchDrinksLetter(letter)
        // console.log(letter)

    }
    

    render () {
        
    return (
        <div>
            <h3>Search by Drink Name:</h3>
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
            <h3>Search by First Letter of Drink:</h3>
            <RenderLetters letterClick={this.letterClick}/>
        </div>
    )
}
}

export default Search;