import React from "react";
import {
  Card,
  CardImg,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import CommentForm from "./CommentFormComponent";
import { Loading } from "./LoadingComponent";
import {baseURL} from '../shared/baseURL'

function RenderDish({ dish }) {
  return (
    <Card>
      <CardImg width="100%" src={baseURL + dish.image} alt={dish.name} />
      <CardTitle>{dish.name}</CardTitle>
      {dish.description}
    </Card>
  );
}

function RenderComments({ comments, postComment, dishId }) {
  if (comments != null)
    var comments = comments?.map((comment) => {
      return (
        <div>
          <li key={comment.id}>
            <p>{comment.comment}</p>
            <p>
              --{comment.author},{" "}
              {new Intl.DateTimeFormat("en-us", {
                year: "numeric",
                month: "short",
                day: "2-digit",
              }).format(new Date(Date.parse(comment.date)))}
            </p>
          </li>
        </div>
      );
    });
  else comments = <div></div>;
  return (
    <div>
      {comments}
      <CommentForm dishId={dishId} postComment={postComment}></CommentForm>
    </div>
  );
}

const DishDetail = (props) => {
  console.log(props)
  if (props.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  }
  else if (props.errMess) {
    <div className="container">
    <div className="row">
      <h4>{props.errMess}</h4>
    </div>
  </div>
  }
  if (props.dish != null)
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>

            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{props.dish.name}</h3>
            <hr />
          </div>
        </div>

        <div className="row">
          <div className='col-12 col-md-5 m-1"'>
            <RenderDish dish={props.dish} />
          </div>
          <div className="col-12 col-md-5 m-1">
            <h1>Comments</h1>
            <ul className="list-unstyled">
              <RenderComments
                comments={props.comments}
                postComment={props.postComment}
                dishId={props.dish.id}
              />
            </ul>
          </div>
        </div>
      </div>
    );
  else return <div>empty</div>;
};

export default DishDetail;
