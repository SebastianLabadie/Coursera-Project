import React from 'react';
import DishDetail from './DishdetailComponent';
import { Card, CardImg, CardImgOverlay,
    CardTitle } from 'reactstrap';


function RenderMenuItem({ dish , onClick}){
    return(
        <div key={dish.id} >
            <Card onClick={() => onClick(dish.id)} >
                <CardImg width="100%"  object src={dish.image} alt={dish.name} />
                <CardImgOverlay> 
                    <CardTitle> {dish.name}</CardTitle>
                </CardImgOverlay>
            </Card>
        </div>
    );
}
    
    const Menu = (props) => {
        const menu= props.dishes.map((dish) => {
            return (
                <div key={dish.id } className="col-12 col-md-5 m-1"> 
                  <RenderMenuItem dish={dish} onClick={props.onClick} />
                </div>
            )
          
        });

        return(
            <div className="container"> 
                <div className="row mt-3">
                        {menu}
                </div>
            </div>

        );

    }

export default Menu;