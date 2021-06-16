import React,{Component} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

class Search extends Component {
    constructor () {
        super ()
    }

    render () {
    return (
        <div>
            <h1> Search:</h1>
            <input
                    type="text"
                    name="search"
                    placeholder="search"/>  
                <input
                    type="submit"
                    value="Search!"/>
        </div>
    )
}
}

export default Search;