import React from "react";
import { Button, Modal, ModalHeader, ModalBody,   Col,
    Row,
    Label,} from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";

const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends React.Component {

    constructor(props){
        super(props)

        this.state={
            modalIsOpen: false
        }

        this.toggleModal = this.toggleModal.bind(this)
        this.handleSubmit= this.handleSubmit.bind(this)
        
    }

    toggleModal(){
        this.setState({ modalIsOpen: !this.state.modalIsOpen})
        console.log(this.state.modalIsOpen)
    }

    handleSubmit(values){
      this.toggleModal();
      this.props.addComment(this.props.dishId, values.rating, values.author, values.comment)

    }

  render() {
    return (
      <div>
        <Button onClick={this.toggleModal}> <span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>
        <Modal fade = {false} isOpen= {this.state.modalIsOpen} toggle={this.toggleModal}>
            <ModalHeader>Header</ModalHeader>
            <ModalBody>
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <Row className="form-group">
                <Label for="author" md={2}>
                  Author
                </Label>
                <Col md={10}>
                  <Control.text
                    validators={{
                      minLength: minLength(3),
                      maxLength: maxLength(15)
                    }}
                    model=".author"
                    type="text"
                    className="form-control"
                    id="author"
                    name="author"
                    placeholder="author "
                  ></Control.text>
                  <Errors
                    className="text-danger"
                    model=".author"
                    show="touched"
                    messages={{
                      minLength: "must be 3 characters long",
                      maxLength: "must be 15 characters long"
                    }}
                  ></Errors>
                </Col>
                </Row>
                <Row className="form-group">
                <Label for="rating" md={2}>
                  Rating
                </Label>
                <Col md={10}>
                  <Control.select
                    validators={{

                    }}
                    model=".rating"
                    type="select"
                    className="form-control"
                    id="rating"
                    name="rating"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Control.select>
                  <Errors
                    className="text-danger"
                    model=".rating"
                    show="touched"
                    messages={{
 
                    }}
                  ></Errors>
                </Col>
                </Row>
                <Row className="formg-group">
                <Label for="firstname" md={2}>
                  Author
                </Label>
                <Col md={10}>
                  <Control.textarea
                    validators={{

                    }}
                    model=".comment"
                    rows='6'
                    
                    className="form-control"
                    id="comment"
                    name="comment"
                    placeholder="comment "
                  ></Control.textarea>
                  <Errors
                    className="text-danger"
                    model=".comment"
                    show="touched"
                    messages={{
 
                    }}
                  ></Errors>
                </Col>
                </Row>
                <Row className="form-group" row>
                <Col md={{ size: 10, offset: 2 }}>
                  <Button type="submit" color="primary">
                    Send
                  </Button>
                </Col>
              </Row>
                </LocalForm>
            </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default CommentForm;
