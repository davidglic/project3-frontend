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
            <div className="head-right">
                <Link
                    to="/signup">Sign Up!</Link>
            </div>
            </div>
        )
    }
}

export default Header;