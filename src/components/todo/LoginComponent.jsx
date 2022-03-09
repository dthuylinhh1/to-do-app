import React, {Component} from 'react';
import AuthenticationService from './AuthenticationService.js';

class LoginComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            username: 'in28minutes',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage:false
        }
        // this.handlerUsernameChange = this.handlerUsernameChange.bind(this)
        // this.handlerPasswordChange = this.handlerPasswordChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }
    handleChange(event){
        //console.log(event.target.name);
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
    loginClicked(){
        //in28minutes, dummy
        if(this.state.username==='in28minutes' && this.state.password==='dummy'){
            AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password);
            this.props.navigate(`/welcome/${this.state.username}`)
            // this.setState({showSuccessMessage:true})
            // this.setState({hasLoginFailed:false})
        } 
        else {
            console.log('Failed')
            this.setState({showSuccessMessage:false})
            this.setState({hasLoginFailed:true})
        }
    }
    render(){
        return (
            <div>
                <h1>Login</h1>
                <div className="container"></div>
                {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>
                <ShowValidCredentials showSuccessMessage={this.state.showSuccessMessage}/> */}
                {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                {this.state.showSuccessMessage && <div>Login Successful</div>}
                User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                <button className="login btn btn-success" onClick={this.loginClicked}>Login</button>
            </div>
        );
    }

    
}

export default LoginComponent