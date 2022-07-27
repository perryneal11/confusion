import React, { Component, Alert } from "react";
import {
  Navbar,
  NavbarBrand,
  Jumbotron,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
  Modal,
  Button,
  ModalBody,
  ModalHeader,
  Form,
  FormGroup,
  Input,
  Label,
  
} from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {

  
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
      isModalOpen: false
    };
    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this)
  }

  

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  toggleModal() {
    console.log("hit" + this.state.isModalOpen)
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  handleLogin(event){
    this.toggleModal();
    alert("Username:" + this.username.value + " Password: " + this.password.value + " Remember: " + this.remember.checked)
    event.preventDefault();


  }

  render() {
    return (
      <div>
        <Navbar dark expand="md">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className="mr-auto" href="/">
              <img
                src="assets/images/logo.png"
                height="30"
                width="30"
                alt="Ristorante Con Fusion"
              ></img>
            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    <span className="fa fa-home fa-lg"></span> Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/aboutus">
                    <span className="fa fa-info fa-lg"></span> About Us
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/menu">
                    <span className="fa fa-list fa-lg"></span> Menu
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/contactus">
                    <span className="fa fa-address-card fa-lg"></span> Contact
                    Us
                  </NavLink>
                </NavItem>
              </Nav>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Button outline onClick={this.toggleModal}>

                    <span className="fa fa-sign-in fa-lg"></span> Login
                  </Button>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
        <Jumbotron>
          <div className="container">
            <div className="row row-header">
              <div className="col-12 col-sm-6">
                <h1>Ristorante Con Fusion</h1>
                <p>
                  We take inspiration form the World's best cuisieins, and
                  create a uniique fusion experience . Our lipsmacking{" "}
                </p>
              </div>
            </div>
          </div>
        </Jumbotron>
        <Modal fade={false} isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleLogin}>
              <FormGroup>
                <Label htmlFor="username">Username</Label>
                <Input type="text" id="username" name="username" innerRef={(input) => this.username = input}></Input>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="password">Password</Label>
                <Input type="text" id="password" name="password" innerRef={(input) => this.password = input}></Input>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" id="remember" name="remember" innerRef={(input) => this.remember = input}></Input>
                  Remember Me
                </Label>
              </FormGroup>
              <Button type="submit" className="bg-primary">
                Login
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default Header;
