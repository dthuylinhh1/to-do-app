import React, {Component} from 'react';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import withNavigation from './WithNavigation.jsx'   
import withParams from "./withParams.jsx";
import AuthenticatedRoute from './AuthenticatedRoute.jsx';
import LoginComponent from './LoginComponent.jsx';
import ListTodoComponent from './ListTodoComponent.jsx';
import HeaderComponent from './HeaderComponent.jsx';
import FooterComponent from './FooterComponent.jsx';
import LogoutComponent from './LogoutComponent.jsx';
import WelcomeComponent from './WelcomeComponent.jsx';
import ErrorComponent from './ErrorComponent.jsx';

class TodoApp extends Component{
    render(){
        const HeaderComponentWithNavigation = withNavigation(HeaderComponent);
        const LoginComponentWithNavigation = withNavigation(LoginComponent);
        const WelcomeComponentWithParams = withParams(WelcomeComponent);
        return(
            <div className="TodoApp">
                
                <BrowserRouter>
                    <HeaderComponentWithNavigation/>
                    <Routes> {/*the Routes ensures that at one point, only one route element is matched*/}
                        {/*for v5 react it is Switch, but the v6 react it becomes Routes */}
                        <Route path="/" exact element={<LoginComponentWithNavigation/>} />   
                        <Route path="/login" element={<LoginComponentWithNavigation/>}/>
                        {/*add :name to show whoever login */}
                        <Route path="/welcome/:name" element={
                            <AuthenticatedRoute>
                                <WelcomeComponentWithParams/>
                            </AuthenticatedRoute>
                        }/>
                        {/* <AuthenticatedRoute path="/welcome/:name" element={<WelcomeComponentWithParams/>}/> */}
                        {/* <AuthenticatedRoute path="/todos" element={<ListTodoComponent/>}/> */}
                        <Route path="/todos" element={
                            <AuthenticatedRoute>
                                <ListTodoComponent/>
                            </AuthenticatedRoute>
                        }/>
                        <Route path="/logout" element={
                            <AuthenticatedRoute>
                                <LogoutComponent/>
                            </AuthenticatedRoute>
                        }/>
                        {/* <AuthenticatedRoute path="/logout" element={<LogoutComponent/>}/> */}
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