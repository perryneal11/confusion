import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import { Loading } from "./LoadingComponent";
import {baseURL} from '../shared/baseURL'
import {FadeTransform} from 'react-animation-components'

function RenderCard({ item, isLoading, errMess }) {
  console.log(item)
    if (isLoading){
        return(<Loading></Loading>)
    }
    else if (errMess){
        return(<h4>{errMess}</h4>)
    }
    else
  return (
    <FadeTransform in 
      transformProps={{exitTransform: 'scale(0.5) translateY(-50%)'}}>

      
    <Card>
      <CardBody>
        <CardImg src={baseURL + item.image} alt={item.name} />
        <CardTitle>{item.name}</CardTitle>
        {item.designation ? (
          <CardSubtitle>{item.designation}</CardSubtitle>
        ) : null}
        <CardText>{item.description}</CardText>
      </CardBody>
    </Card>
    </FadeTransform>
  );
}

function Home(props) {
  console.log(props)
  return (

    <div className="container">
      <div className="row align-items-start">
        <div className="col-12 col-md m-1">
          <RenderCard
            item={props.dish}
            isLoading={props.dishesLoading}
            errMess={props.dishesLoading}
          ></RenderCard>
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard item={props.promotion}
                      isLoading={props.promosLoading}
                      errMess={props.promosErrMess}></RenderCard>
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard item={props.leader}></RenderCard>
        </div>
      </div>
    </div>
  );
}

export default Home;
