import React, {Component} from "react";
import {Link} from "react-router-dom";

class Header extends Component{
    constructor() {
        super ()
    }
    render () {
        return (
            <div className="header">
                <h1 className="title">Cocktail App</h1>
                <Link
                    to="/signup">Sign Up!</Link>
            </div>
        )
    }
}

export default Header;