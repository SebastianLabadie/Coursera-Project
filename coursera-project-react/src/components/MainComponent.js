import React from 'react';
import Menu from './MenuComponent';
import Home from './HomeComponent'
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent'
import About from './AboutComponent';
import { Component } from 'react';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {addComment,fetchDishes,fetchComments,fetchPromos} from '../redux/actions/ActionCreator'
import { actions} from 'react-redux-form'
import {TransitionGroup,CSSTransition} from 'react-transition-group'

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

const mapDispatchToProps=(dispatch)=>{
  return(
    {
      addComment:(dishId,rating,author,comment) => dispatch(addComment(dishId,rating,author,comment)),
      fetchDishes: () => {dispatch(fetchDishes())},
      resetFeedbackForm: () => {dispatch(actions.reset('feedback'))},
      fetchComments: () => dispatch(fetchComments()),
      fetchPromos: () => dispatch(fetchPromos())
    }
  )
}

class Main extends Component{

  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchDishes()
    this.props.fetchComments()
    this.props.fetchPromos()
  }
  render(){

    const HomePage= () =>{
      return(
          <Home dish={this.props.dishes.dishes.filter((dish) => dish.featured )[0]}
                dishesLoading={this.props.dishes.isLoading}
                dishesErrMess={this.props.dishes.errMess}
                promotion={this.props.promotions.promotions.filter((promotion) => promotion.featured )[0]}
                promotionLoading={this.props.promotions.isLoading}
                promotionErrMess={this.props.promotions.errMess}
                leader={this.props.leaders.filter((leader) => leader.featured )[0]}
          />

      )
    }
    const AboutPage= () =>{
      return(
          <About leaders={this.props.leaders}
          />

      )
    }

    const DishWithId= ({match}) =>{
      return(
        <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id===parseInt(match.params.dishId,10))[0]}
          isLoading={this.props.dishes.isLoading}
          ErrMess={this.props.dishes.errMess}
          comments={this.props.comments.comments.filter((comment) => comment.dishId===parseInt(match.params.dishId,10))}
          commentErrMess={this.props.comments.errMess}
          addComment={this.props.addComment}
        />
      )
    }

    return (
      <div >
      <Header />
      <TransitionGroup>
          <CSSTransition key={this.props.location.key} classNames='page' timeout={300}>
            <Switch > 
              <Route exact path="/home" component={HomePage} />
              <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes}/>}/>
              <Route path="/menu/:dishId" component={DishWithId} />
              <Route exact path="/contactus" component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm}/>} />
              <Route exact path="/aboutus" component={AboutPage}/>
              <Redirect to="/home" component={HomePage} />
            </Switch>
          </CSSTransition>
      </TransitionGroup>
      <Footer />
      </div>
    )
  };

};
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));
