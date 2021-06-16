import React,{Component} from "react";
import {Link} from "react-router-dom";
import axios from "axios";


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

    render () {
    return (
        <div>
            <h1> Search:</h1>
            <input
                    type="text"
                    name="searchBar"
                    value={this.state.searchBar}
                    placeholder="search"
                    onChange={this.handleChange}/>  
                <input
                    type="submit"
                    value="Search!"
                    onClick={() => this.props.searchDrinks(this.state.searchBar)}
                    />
                    

        <div>Search Results:</div>
        </div>
    )
}
}

export default Search;