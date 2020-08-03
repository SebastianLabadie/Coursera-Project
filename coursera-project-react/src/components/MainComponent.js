import React from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
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
      <Header />
      <Menu dishes={this.state.dishes}  onClick={(dishID) => this.onDishSelected(dishID)}/>
      <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0] } />
      <Footer />
      </div>
    )
  };
};
export default Main;
