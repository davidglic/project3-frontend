import React, {Component} from "react";

class Signup extends Component{
    constructor() {
        super ()
    }

render () {
    return(
        <div>
            <h2>Sign Up People!</h2>
            <form>
                <input
                    type="text"
                    name="username"
                    placeholder="username"/>
                <input
                    type="password"
                    name="password"
                    placeholder="password"/>
                <input
                    type="text"
                    name="name"
                    placeholder="name"/>
                <input
                    type="text"
                    name="email"
                    placeholder="email"/>  
                <input
                    type="submit"
                    value="Sign Up!"/>
                    

            </form>
        </div>
    )
}
}

export default Signup;