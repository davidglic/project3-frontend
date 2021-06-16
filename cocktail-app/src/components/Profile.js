import React, {Component} from "react";
import axios from "axios";

class Profile extends Component {
    constructor (props) {
        super (props)
        this.state ={
            name: '',
            username: '',
            password: '',
            email: ''
        }
    }
    
    handleChange = (event) => {
        console.log(event.target.name)
        console.log(event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        })
        
    }

    componentDidMount() {
        console.log(this.props.username)
        axios.get(`http://localhost:3001/user/${this.props.username}`)
            .then(resp => {
                this.setState({
                    name: resp.data.name,
                    username: resp.data.username,
                    password: resp.data.password,
                    email: resp.data.email
                })
                
            })
    }

    onSubmit = (event) => {
        event.preventDefault()
        axios.put(`http://localhost:3001/user/${this.props.username}`, this.state)
            .then(resp => {
                console.log(resp.data)
                this.props.updateState(this.state.username, this.state.name)
            })
        
    }

    render () {

    return (
        <div>
            <h1> Profile:</h1>
            <div>Username: {this.state.username}</div>
            <form onSubmit={this.onSubmit}>
                name:<input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                password:<input type="password"  name="password" value={this.state.password} onChange={this.handleChange}/>
                email:<input type="text" name="email" value={this.state.email} onChange={this.handleChange}/>
                <input type="submit" value="Submit Changes" />
            </form>
            
        </div>
    )
}
}

export default Profile;