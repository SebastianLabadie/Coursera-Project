import React from 'react';
import { Navbar, NavbarBrand , Button} from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../test_data/dishes';
import { Component } from 'react';

class Main extends Component{

  constructor(props){
    super(props);

    this.state = {
      dishes: DISHES,
      selectedDish:null
    }
  }

  
  onDishSelected(dishID){
    this.setState({selectedDish: dishID});
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
      <Menu dishes={this.state.dishes}  onClick={(dishID) => this.onDishSelected(dishID)}/>
      <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0] } />
      </div>
    )
  };
};
export default Main;
