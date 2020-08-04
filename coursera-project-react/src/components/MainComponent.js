import React from 'react';
import Menu from './MenuComponent';
import Home from './HomeComponent'
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent'
import { DISHES } from '../test_data/dishes';
import { COMMENTS } from '../test_data/comments';
import { LEADERS } from '../test_data/leaders';
import { PROMOTIONS } from '../test_data/promotions';
import { Component } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'

class Main extends Component{

  constructor(props){
    super(props);

    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders:LEADERS
    }
  }


  render(){

    const HomePage= () =>{
      return(
          <Home dish={this.state.dishes.filter((dish) => dish.featured )[0]}
                promotion={this.state.promotions.filter((promotion) => promotion.featured )[0]}
                leader={this.state.leaders.filter((leader) => leader.featured )[0]}
          />

      )
    }

    return (
      <div >
      <Header />
      <Switch > 
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes}/>}/>
        <Route exact path="/contactus" component={() => <Contact />} />
        <Redirect to="/home" component={HomePage} />
      </Switch>
      <Footer />
      </div>
    )
  };

    
  onDishSelected(dishID){
    this.setState({selectedDish: dishID});
  }

};
export default Main;
