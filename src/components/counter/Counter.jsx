import React, { Component } from 'react'
import './Counter.css'
// import PropTypes from 'prop-types'

class Counter extends Component{

    constructor(){
        super(); //Error 1 call super method
        this.state = {
            //define javascript object in here
            counter : 0
        }

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }

    render(){
        return (
            <div className="counter">
                      <CounterButton incrementMethod={this.increment} decrementMethod={this.decrement}/>
                      <CounterButton incrementMethod={this.increment} decrementMethod={this.decrement} by={5}/>
                      <CounterButton incrementMethod={this.increment} decrementMethod={this.decrement} by={10}/>
                      <span className="count">{this.state.counter}</span>
                      <div>
                      <button className='reset' onClick={this.reset}>RESET</button>
                      </div>
            </div>
          );
    }

    reset(){
        this.setState({counter:0});
    }

    increment (by){ 
        //console.log(`increment from parent - ${by}`);
        //change the setState method into an arrow method for better reading 
        // this.setState( {
        //     counter : this.state.counter + by
        // });
        this.setState(
            (prevState) => {
                return {counter: prevState.counter + by}
            }
        );
    }

    decrement (by){ 
        this.setState(
            (prevState) => {
                return {counter: prevState.counter - by}
            }
        );
    }
}

class CounterButton extends Component{

    //adding state to a react counter component
    //Define the initial state in a constructor
    // constructor(){
    //     super(); //Error 1 call super method
    //     this.state = {
    //         //define javascript object in here
    //         counter : 0,
    //     }

    //     // this.increment = this.increment.bind(this);
    //     // this.decrement = this.decrement.bind(this);
    // }
    //state => counter 0

    //change render method into arrow method - so we won't need to bind increment method 
    //when changing, remember to also change increment method into arrow method
    //render = () => 
    render (){
        //inline JavaScript CSS in jsx
        //const style = {fontSize : "50px", padding:"15px 30px"}
        return(
            <div className='counter'>
                <button onClick={() => this.props.incrementMethod(this.props.by)}>+{this.props.by}</button>
                <button onClick={() => this.props.decrementMethod(this.props.by)}>-{this.props.by}</button>
                {/* <span className="count">{this.state.counter}</span> */}
            </div>
        )
    }
    
    // increment (){ //Update state - counter ++
    //     //console.log('increment');
    //     //this.state.counter++; //Bad practice
    //     this.setState( {
    //         counter : this.state.counter + this.props.by 
    //     });

    //     this.props.incrementMethod(this.props.by);
    // }

    // decrement (){ 
    //     this.setState( {
    //         counter : this.state.counter - this.props.by 
    //     });

    //     this.props.decrementMethod(this.props.by);
    // }

}

//set the default by value to 1 
CounterButton.defaultProps = {
    by : 1
}

// //how to put constrain to props value
// CounterButton.PropTypes = {
//     by: PropTypes.number
// }

export default Counter
