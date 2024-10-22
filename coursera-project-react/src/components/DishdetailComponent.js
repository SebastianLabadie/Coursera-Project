import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb,BreadcrumbItem,
    Button,Modal,ModalBody,ModalHeader, Row,Label,Col} from 'reactstrap';
import {Link} from 'react-router-dom'
import {LocalForm,Errors,Control} from 'react-redux-form'
import {Loading} from './LoadingComponent'
import {baseURL} from '../test_data/baseURL'
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends React.Component{

    constructor(props){
        super(props);
        this.state={
            isModalOpen:false
        }
    }
    
    toggleModal=()=>{
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

    handleClick= (e) =>{
        e.preventDefault()
        this.toggleModal()
    }

    handleSubmit=(values)=>{
        console.log(values)
        this.props.postComment(this.props.dishId,values.rating,values.author,values.comment)
      
    }

    render(){
        
        return(
            <>
            <Button outline onClick={this.handleClick} >
                <span className="fa fa-edit fa-lg"> Submit Comment </span>    
            </Button>
             <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
             <ModalHeader><h4>Submit Comment</h4></ModalHeader>
                <ModalBody>
                <div className="col-12">
                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                        <Row className="form-group">
                            <Label htmlFor="rating" md={2} >Rating</Label>
                            <Col md={12}>
                                <Control.select model=".rating" id="rating" name="rating"
                                        placeholder="Rating"
                                        className="form-control"
                                        defaultValue="1"
                                >   <option>1</option> 
                                    <option>2</option> 
                                    <option>3</option> 
                                    <option>4</option> 
                                    <option>5</option> 
                                </Control.select> 
                                
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="author" md={4} >Your Name</Label>
                            <Col md={12}>
                                <Control.text model=".author" id="author" name="author"
                                        placeholder="Your Name"
                                        className="form-control"
                                        validators={{
                                            minLength:minLength(3),maxLength:maxLength(15)
                                        }}
                                /> 
                                <Errors
                                    className="text-danger"
                                    model=".author"
                                    show="touched"
                                    messages={{
                                        minLength: 'Must be greater than 2 characters',
                                        maxLength: 'Must be 15 characters or less'
                                    }}
                                />
                            </Col>
                        </Row> 
                        <Row className="form-group">
                            <Label htmlFor="comment" md={3} >Comment</Label>
                            <Col md={12} rows={6}>
                                <Control.textarea model=".comment" id="comment" name="comment"
                                        className="form-control"
                                /> 
                            </Col>
                        </Row>
                        <Row className="form-group">
                                <Col >
                                    <Button type="submit" color="primary">
                                        Submit
                                    </Button>
                                </Col>
                            </Row>
                    </LocalForm>
                </div>
                </ModalBody>
             </Modal>
             </>
        )
    }
}

   function RenderComments({comments,dishId,postComment}) {
        const commentsList = comments.map((comment) => {
          return (
            <Fade in> 
            <li key={comment.id}>
              <p>{comment.comment}</p>
              <p>--- {comment.author},
                {new Intl.DateTimeFormat('en-US',{ year:"numeric", month:"short", day:"2-digit"}).format(new Date(Date.parse(comment.date)))}
              </p>
            </li>
            </Fade>
          );
        });
    
        if (comments != null)
          return (
            <div>
              <ul className="list-unstyled">
              <Stagger in> 
                <li><h4>Comments</h4></li>
                {commentsList}
                </Stagger>
              </ul>
              <CommentForm dishId={dishId} postComment={postComment} />
            </div>
          );
        else
          return (
            <div></div>
          );
      }

  function  RenderDish({dish}){
        if(dish != null ){
            return(
                <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}> 
                        <Card>
                        <CardImg width="100%" src={baseURL+dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                        </Card>
                </FadeTransform>    
            );
        }
        else{
            return(
                <div></div>
            );
        } 
    }

    const DishDetail = (props) => {
            
        if (props.isLoading) {
            return(
                <div className="container">
                    <div className="row">            
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (props.errMess) {
            return(
                <div className="container">
                    <div className="row">            
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            );
        }
        else if (props.dish != null) 
        return (
          <div className="container"> 
            <div className="row">
                      <Breadcrumb>
                          <BreadcrumbItem> <Link to="/menu">Menu</Link>
                          </BreadcrumbItem>
                          <BreadcrumbItem active> {props.dish.name}
                          </BreadcrumbItem>
                      </Breadcrumb>
                      <div className="col-12"> 
                          <h3>{props.dish.name}</h3>
                          <hr />
                      </div>
                      <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                      </div>
                      <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments} 
                        dishId={props.dish.id} postComment={props.postComment}
                        />
                      </div> 
            </div>
                   
          </div>
  
        );
      else
        return (
          <div></div>
        );
    }
 
    
    


export default DishDetail;