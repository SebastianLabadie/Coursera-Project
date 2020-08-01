import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle,ListGroup, ListGroupItem} from 'reactstrap';

class DishDetail extends Component{

    constructor(props){
        super(props);

        this.state={
            
        }
    }

    renderComments (comments){ 
        if(this.props.dish != null ){
            return(comments.map((comment) => {
                return(
                    <>
                    <p>{comment.comment}</p>
                    <p>---{comment.author},{comment.date}</p>
                    </>
                );
            })
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }

    renderDish(dish){
        if(dish != null ){
            return(
                <>
                    <div className="col-12 col-md-5 m-1"> 
                        <Card>
                        <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                        </Card>
                        
                    </div>
                    <div className="col-12 col-md-5 m-"> 
                        <h4>Comments</h4>
                        {this.renderComments(this.props.dish.comments)}
                     </div>
                     
                </>
            );
        }
        else{
            return(
                <div></div>
            );
        } 
    }

    render(){
        return(
           
            <div className="row mt-3"> 
            {this.renderDish(this.props.dish)}
            </div>
            
        );
    }
 
    }
    


export default DishDetail;