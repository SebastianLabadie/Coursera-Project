import React from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand , Button} from 'reactstrap';
import Menu from './components/MenuComponent';
import { DISHES } from './test_data/dishes';
import './App.css';
import { Component } from 'react';


class App extends Component{

  constructor(props){
    super(props);

    this.state = {
      dishes: DISHES
    }
  }

  render(){
    return (
      <div className="App">
       <Navbar dark color="primary" >
         <div className="container">
            <NavbarBrand href="/" color="red"> Ristorante Con Fusion</NavbarBrand>
            <Button variant="secondary">ASD</Button>
           </div>
      </Navbar>
      <Menu dishes={this.state.dishes}/>
      </div>
    )
  };
};
export default App;
