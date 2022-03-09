import React, {Component} from 'react';
import AuthenticationService from './AuthenticationService.js';
import {Link} from 'react-router-dom'

class HeaderComponent extends Component{
    render(){
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        console.log(isUserLoggedIn);

        return (
            <header>
                {/* using bootstrap class to style the header and creating a nav bar */}
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="http://www.youtube.com" className="navbar-brand">in28munites</a></div>
                    <ul className="navbar-nav">
                        {isUserLoggedIn && <li><Link  className="nav-link" to="/welcome/in28minutes">Home</Link></li>}
                        {isUserLoggedIn && <li><Link  className="nav-link" to="/todos">Todos</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn && <li><Link  className="nav-link" to="/login">Login</Link></li>}
                        {isUserLoggedIn && <li><Link  className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                        {/* mapping onclick event to method call*/ }
                    </ul>
                </nav>
            </header>
            
        )
    }
}

export default HeaderComponent