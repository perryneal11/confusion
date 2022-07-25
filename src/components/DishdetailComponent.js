import React, { Component } from 'react';
import { Card, CardImg, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);
    }

    renderDish(dish){
        return(
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardTitle>{dish.name}</CardTitle>
                {dish.description}
            </Card>
         
        )
    }

    renderComments(dish){
        if (dish.comments !== null)
         var comments = dish.comments?.map((comment) => {
                return(    
                    <li key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>--{comment.author}, {new Intl.DateTimeFormat('en-us', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                    </li>             
                )
            })
        else
            comments = <div></div>
        return comments
    }

    render() {
        if (this.props.dish != null)
            return (
 
                <div className = 'row'>
                    <div className='col-12 col-md-5 m-1"'>
                    {this.renderDish(this.props.dish)}
                    </div>
                    
                    <div className='col-12 col-md-5 m-1'>
                        <h1>Comments</h1>
                        <ul className='list-unstyled'>{this.renderComments(this.props.dish)}</ul>
                    
                    </div>
                    
                </div> 
              
            )
        else 
            return(
                <div>empty</div>
            )
    }
}
 
export default DishDetail;