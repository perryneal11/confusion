import React, {Component} from 'react'
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent'
import { DISHES } from '../shared/dishes';
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import {Switch, Route, Redirect} from 'react-router-dom'
import Home from './HomeComponent'

class Main extends Component{

  constructor(props) {
    super(props)
    this.state = {
      dishes: DISHES,
      selectedDish: null
    }
  }


  render() {
    const HomePage = () => {
      return(
        <Home>
        </Home>
      )
    }



    return(
    <div>
        <Header></Header>
        <Switch>
          <Route path='/home' component={HomePage}/>
          <Route exact path="/menu" component={()=> <Menu dishes={this.state.dishes}/>}/>
          <Redirect to="/home"/>        
        </Switch>
        <Footer></Footer>
    </div>)
  }
}

export default Main;
