import React, {Component} from 'react'
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent'
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import {Switch, Route, Redirect} from 'react-router-dom'
import Home from './HomeComponent'
import Contact from './ContactComponent'
import AboutUs from './AboutComponent'
import { DISHES } from '../shared/dishes';
import {COMMENTS} from '../shared/comments'
import {PROMOTIONS} from '../shared/promotions'
import {LEADERS} from '../shared/leaders'


class Main extends Component{

  constructor(props) {
    super(props)
    this.state = {
      dishes: DISHES,
      selectedDish: null,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS

    }
  }


  render() {
    const HomePage = () => {
      return(
        <Home dish={this.state.dishes.filter((dish) => dish.featured == true)[0]}
        promotion={this.state.promotions.filter((promotion) => promotion.featured == true)[0]}
        leader={this.state.leaders.filter((leader) => leader.featured == true)[0]}
        />

      )
    }

    const DishWithId = ({match}) => {
      return(
          <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
      );
    };



    return(
    <div>
        <Header></Header>
        <Switch>
          <Route path = '/home' component={HomePage}/>
          <Route path = '/menu/:dishId' component = {DishWithId}/>
          <Route exact path = '/menu' component={()=> <Menu dishes={this.state.dishes}/>}/>
          <Route path = '/contactus' component={Contact}></Route>
          <Route path = '/aboutus' component={()=> <AboutUs leaders ={this.state.leaders}></AboutUs>}></Route>
        </Switch>
        <Footer></Footer>
    </div>)
  }
}

export default Main;
