import React, {Component} from 'react'
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent'

import Header from './HeaderComponent'
import Footer from './FooterComponent'
import {Switch, Route, Redirect} from 'react-router-dom'
import Home from './HomeComponent'
import Contact from './ContactComponent'
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



    return(
    <div>
        <Header></Header>
        <Switch>
          <Route path='/home' component={HomePage}/>
          <Route exact path="/menu" component={()=> <Menu dishes={this.state.dishes}/>}/>
          <Route exact path = "/contactus" component={Contact}></Route>
          <Redirect to="/home"/>        
        </Switch>
        <Footer></Footer>
    </div>)
  }
}

export default Main;
