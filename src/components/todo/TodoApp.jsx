import React, {Component} from "react";

class TodoApp extends Component{
    render(){
        return(
            <div className="TodoApp">
                My Todo Application
                <LoginComponent/>
            </div>
        );
    }
}

class LoginComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            username: 'in28minutes',
            password: ''
        }
        // this.handlerUsernameChange = this.handlerUsernameChange.bind(this)
        // this.handlerPasswordChange = this.handlerPasswordChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event){
        console.log(event.target.name);
        //on the left hand side must be a variable name, a const. If we want to put a variable there, use []
        this.setState({[event.target.name] :event.target.value})
    }
    // handlerUsernameChange(event){
    //     console.log(event.target.value);
    //     //on the left hand side must be a variable name, a const. If we want to put a variable there, use []
    //     this.setState({[event.target.name] :event.target.value})
    // }
    // handlerPasswordChange(event){
    //     console.log(event.target.value);
    //     this.setState({password:event.target.value})
    // }
    render(){
        return (
            <div>
                User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                <div><button className="login">Login</button></div>
            </div>
        );
    }
}

export default TodoApp