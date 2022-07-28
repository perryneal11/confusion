import React, { Component } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Col,
  Row,
  Label,
} from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";
import { Link } from "react-router-dom";


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      telnum: "",
      email: "",
      agree: false,
      contactType: "Tel",
      message: "",
      touched: {
        firstname: false,
        lastname: false,
        telnum: false,
        email: false,
      },
    };
  }

  handleSubmit(values) {
    console.log("curent state is " + JSON.stringify(values));
    alert("curent state is " + JSON.stringify(values));
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Contact Us</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>Contact Us</h3>
            <hr />
          </div>
        </div>
        <div className="row row-content">
          <div className="col-12">
            <h3>Location Information</h3>
          </div>
          <div className="col-12 col-sm-4 offset-sm-1">
            <h5>Our Address</h5>
            <address>
              121, Clear Water Bay Road
              <br />
              Clear Water Bay, Kowloon
              <br />
              HONG KONG
              <br />
              <i className="fa fa-phone"></i>: +852 1234 5678
              <br />
              <i className="fa fa-fax"></i>: +852 8765 4321
              <br />
              <i className="fa fa-envelope"></i>:{" "}
              <a href="mailto:confusion@food.net">confusion@food.net</a>
            </address>
          </div>
          <div className="col-12 col-sm-6 offset-sm-1">
            <h5>Map of our Location</h5>
          </div>
          <div className="col-12 col-sm-11 offset-sm-1">
            <div className="btn-group" role="group">
              <a
                role="button"
                className="btn btn-primary"
                href="tel:+85212345678"
              >
                <i className="fa fa-phone"></i> Call
              </a>
              <a role="button" className="btn btn-info">
                <i className="fa fa-skype"></i> Skype
              </a>
              <a
                role="button"
                className="btn btn-success"
                href="mailto:confusion@food.net"
              >
                <i className="fa fa-envelope-o"></i> Email
              </a>
            </div>
          </div>
        </div>

        <div className="row row-content">
          <div className="col-12">
            <h3>Send us your feedback</h3>
          </div>

          <div className="col-12 col-md-9">
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <Row className="formg-group">
                <Label for="firstname" md={2}>
                  First Name
                </Label>
                <Col md={10}>
                  <Control.text
                    validators={{
                      required,
                      minLength: minLength(3),
                      maxLength: maxLength(10),
                    }}
                    model=".firstname"
                    type="text"
                    className="form-control"
                    id="firstname"
                    name="firstname"
                    placeholder="First Name "
                  ></Control.text>
                  <Errors
                    className="text-danger"
                    model=".firstname"
                    show="touched"
                    messages={{
                      required: "Required",
                      minLength: "Must be greater than 2 ",
                      maxLength: "Must be less than 2",
                    }}
                  ></Errors>
                </Col>
              </Row>
              <Row className="formg-group">
                <Label for="lastname" md={2}>
                  Last Name
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".lastname"
                    validators={{
                      required,
                      minLength: minLength(3),
                      maxLength: maxLength(10),
                    }}
                    type="text"
                    className="form-control"
                    id="lastname"
                    name="lastname"
                    placeholder="Last Name "
                  ></Control.text>
                  <Errors
                    className="text-danger"
                    model=".lastname"
                    show="touched"
                    messages={{
                      required: "Required",
                      minLength: "Must be greater than 2 ",
                      maxLength: "Must be less than 2",
                    }}
                  ></Errors>
                </Col>
              </Row>
              <Row className="form-group">
                <Label for="telnum" md={2}>
                  Contact Nmumber
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".telnum"
                    type="tel"
                    validators={{
                      required,
                      minLength: minLength(3),
                      maxLength: maxLength(15),
                      isNumber
                    }}
                    className="form-control"
                    id="telnum"
                    name="telnum"
                    placeholder="Contact Number"
                  ></Control.text>
                                    <Errors
                    className="text-danger"
                    model=".telnum"
                    show="touched"
                    messages={{
                      required: "Required",
                      minLength: "Must be greater than 2 numbers",
                      maxLength: "Must be less than 10 numbers",
                      isNumber: "Must be a number "
                    }}
                  ></Errors>
                </Col>
              </Row>
              <Row className="formg-group">
                <Label for="email" md={2}>
                  Email
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".email"
                    validators={{
                      required,
                      validEmail
                    }}
                    className="form-control"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="email "
                  ></Control.text>
                                                      <Errors
                    className="text-danger"
                    model=".email"
                    show="touched"
                    messages={{
                      required: "Required",
                      validEmail: 'invalid email'
                    }}
                  ></Errors>
                </Col>
              </Row>
              <Row className="formg-group">
                <Col md={{ size: 6, offset: 2 }}>
                  <div className="form-check">
                    <Label check>
                      <Control.checkbox
                        model=".agree"
                        type="checkbox"
                        className="form-check-input"
                        name="agree"
                      />
                      <strong>May we contact you</strong>
                    </Label>
                  </div>
                </Col>
                <Col md={{ size: 3, offset: 1 }}>
                  <Control.select
                    model=".contactType"
                    type="select"
                    name="contactType"
                    className="form-control"
                  >
                    <option>Tel</option>
                    <option>Email</option>
                  </Control.select>
                </Col>
              </Row>
              <Row className="formg-group">
                <Label for="feedback" md={2}>
                  Your Feedback
                </Label>
                <Col md={10}>
                  <Control.textarea
                    model=".message"
                    className="form-control"
                    id="message"
                    name="message"
                    rows="12"
                  ></Control.textarea>
                </Col>
              </Row>

              <Row className="formg-group" row>
                <Col md={{ size: 10, offset: 2 }}>
                  <Button type="submit" color="primary">
                    Send Feedback
                  </Button>
                </Col>
              </Row>
            </LocalForm>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
