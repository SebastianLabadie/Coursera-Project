import React from 'react';
import { Card, CardImg, CardImgOverlay,
    CardTitle, Breadcrumb,BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom'


function RenderMenuItem({ dish , onClick }){
    return(
        <div key={dish.id} >
            <Link to={`/menu/${dish.id}`}>
                <Card >
                    <CardImg width="100%"  object src={dish.image} alt={dish.name} />
                    <CardImgOverlay> 
                        <CardTitle> {dish.name}</CardTitle>
                    </CardImgOverlay>
                </Card>
             </Link>
        </div>
    );
}
    
    const Menu = (props) => {
        const menu= props.dishes.map((dish) => {
            return (
                <div key={dish.id } className="col-12 col-md-5 m-1"> 
                  <RenderMenuItem dish={dish} />
                </div>
            )
          
        });

        return(
            <div className="container"> 
                <div className="row mt-3">
                    <Breadcrumb> 
                        <BreadcrumbItem> <Link to="/home">Menu</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active> Menu
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12"> 
                        <h3>Menu</h3>
                        <hr />
                    </div>
                </div>
                <div className="row mt-3">
                        {menu}
                </div>
            </div>

        );

    }

export default Menu;