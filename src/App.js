import React, { Component } from 'react';
import FirstComponent from './components/learning-examples/FirstComponent';
import logo from './logo.svg';
import './App.css';
import './bootstrap.css';
import TodoApp from './components/todo/TodoApp'
import Counter from './components/counter/Counter'
 
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Counter/> */}
        <TodoApp/>
      </div>
    );
  }
}




class LearningComponents extends Component {
  render() {
    return (
      <div className="LearningComponents">
        My Hello World
        <FirstComponent></FirstComponent>
      </div>
    );
  }
}

export default App;
