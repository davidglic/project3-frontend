import React from "react";
import {Link} from "react-router-dom";
import axios from "axios";

const Landing = ()=> {
    return(
        <div>
            <h1> Drinks Array:</h1>
            <Link
                to="/drinkstream">Drink Stream</Link>

        </div>
    )
}
export default Landing;