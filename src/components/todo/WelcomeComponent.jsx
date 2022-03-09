import React, {Component} from 'react';
import {Link} from 'react-router-dom'

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

export default WelcomeComponent