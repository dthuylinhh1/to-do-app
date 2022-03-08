import React, {Component} from "react";
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import withNavigation from './WithNavigation.jsx'   
import withParams from "./withParams.jsx";

class TodoApp extends Component{
    render(){
        const LoginComponentWithNavigation = withNavigation(LoginComponent);
        const WelcomeComponentWithParams = withParams(WelcomeComponent);
        return(
            <div className="TodoApp">
                
                <BrowserRouter>
                    <HeaderComponent/>
                    <Routes> {/*the Routes ensures that at one point, only one route element is matched*/}
                        {/*for v5 react it is Switch, but the v6 react it becomes Routes */}
                        <Route path="/" exact element={<LoginComponentWithNavigation/>} />   
                        <Route path="/login" element={<LoginComponentWithNavigation/>}/>
                        {/*add :name to show whoever login */}
                        <Route path="/welcome/:name" element={<WelcomeComponentWithParams/>}/>
                        <Route path="/todos" element={<ListTodoComponent/>}/>
                        <Route path="/logout" element={<LogoutComponent/>}/>
                        <Route path="*" element={<ErrorComponent/>}/>
                    </Routes>
                    <FooterComponent/>
                </BrowserRouter>

                {/* <LoginComponent/>
                <WelcomeComponent/> */}
            </div>
        );
    }
}

class HeaderComponent extends Component{
    render(){
        return (
            <header>
                {/* using bootstrap class to style the header and creating a nav bar */}
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="http://www.youtube.com" className="navbar-brand">in28munites</a></div>
                    <ul className="navbar-nav">
                        <li><Link  className="nav-link" to="/welcome/in28minutes">Home</Link></li>
                        <li><Link  className="nav-link" to="/todos">Todos</Link></li>
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        <li><Link  className="nav-link" to="/login">Login</Link></li>
                        <li><Link  className="nav-link" to="/logout">Logout</Link></li>
                    </ul>
                </nav>
            </header>
            
        )
    }
}

class FooterComponent extends Component{
    render(){
        return (
            <footer className="footer">
                <span className="text-muted">All Rights Reserved 2022</span>
            </footer>
        )
    }
}

class LogoutComponent extends Component{
    render(){
        return (
            <>
                <h1>You are logged out</h1>
                <div className="container">
                    Thank you for using our application! 
                </div>
            </>
        )
    }
}



class ListTodoComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            todos: 
            [
             {id:1, description: 'Learn React', done:false, targetDate: new Date()},
             {id:2, description: 'Travel', done:false, targetDate: new Date()},
             {id:3, description: 'Sleep', done:false, targetDate: new Date()}
            ]
        }
    }
    render(){
        return (
            <div>
                <h1>Lists Todos</h1>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                             
                                <th>description</th>
                                <th>Is Completed?</th>
                                <th>Target Date</th>
                            </tr>
                        </thead>
                        <tbody> {/*add {} to indicate this should repeat */}
                            {
                                this.state.todos.map (
                                    todo => 
                                    <tr>
                                        
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{todo.targetDate.toString()}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div> 
        )
    }
}

class WelcomeComponent extends Component{
    render(){
        return (
            <>
                <h1>Welcome!</h1>
                <div className="container">
                    Welcome {this.props.params.name}. You can manage your todos <Link to="/todos">here</Link>. 
                </div>
                {/*when you use a <a> element, the whole page will be refreshed. But when you build a single page you dont want the whole page to be refreshed. So use Link instead of simple <a> tag where only that component will be replaced*/}
            </>     

        )
    }
}

function ErrorComponent(){
    return <div>An Error Occurred. I don't know what to do! Contact support at 123-456-7890!</div>
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
                <div classBN="container"></div>
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