import React, {Component} from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import withNavigation from './WithNavigation.jsx'   

class TodoApp extends Component{
    render(){
        const LoginComponentWithNavigation = withNavigation(LoginComponent);
        return(
            <div className="TodoApp">
                
                <BrowserRouter>
                    <Routes>
                        <Route path="/" exact element={<LoginComponentWithNavigation/>} />   
                        <Route path="/login" element={<LoginComponentWithNavigation/>}/>
                        <Route path="/welcome" element={<WelcomeComponent/>}/>
                    </Routes>
                </BrowserRouter>

                {/* <LoginComponent/>
                <WelcomeComponent/> */}
            </div>
        );
    }
}

class WelcomeComponent extends Component{
    render(){
        return <div>Welcome in 28minutes</div> 
    }
}

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
            this.props.navigate(`/welcome`)
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
                {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>
                <ShowValidCredentials showSuccessMessage={this.state.showSuccessMessage}/> */}
                {this.state.hasLoginFailed && <div>Invalid Credentials</div>}
                {this.state.showSuccessMessage && <div>Login Successful</div>}
                User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                <button className="login" onClick={this.loginClicked}>Login</button>
            </div>
        );
    }

    
}

// function ShowInvalidCredentials(props){
//     if(props.hasLoginFailed){
//         return <div>Invalid Credentials</div>
//     }
//     return null
// }

// function ShowValidCredentials(props){
//     if(props.showSuccessMessage){
//         return <div>Login Successful</div>
//     }
//     return null
// }

export default TodoApp