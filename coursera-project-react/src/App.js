import React from 'react';
import Main from './components/MainComponent';
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Component } from 'react';


class App extends Component{

  render(){
    return (
      <BrowserRouter> 
        <div className="App">

        <Main />
        </div>
      </BrowserRouter>
      
    )
  };
};
export default App;
