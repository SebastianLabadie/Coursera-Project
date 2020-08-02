import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';


   function RenderComments({comments}) {
        const commentsList = comments.map((comment) => {
          return (
            <li key={comment.id}>
              <p>{comment.comment}</p>
              <p>--- {comment.author},
                {new Intl.DateTimeFormat('en-US',{ year:"numeric", month:"short", day:"2-digit"}).format(new Date(Date.parse(comment.date)))}
              </p>
            </li>
          );
        });
    
        if (comments != null)
          return (
            <div>
              <ul className="list-unstyled">
                <li><h4>Comments</h4></li>
                {commentsList}
              </ul>
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
                        <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                        </Card>
                        
            );
        }
        else{
            return(
                <div></div>
            );
        } 
    }

    const DishDetail = (props) => {
        if (props.dish != null)
        return (
          <div className="container"> 
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                  <RenderDish dish={props.dish} />
                </div>
      
                <div className="col-12 col-md-5 m-1">
                  <RenderComments comments={props.dish.comments} />
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