import React, {Component} from 'react';
import DishDetail from './DishdetailComponent';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
    }


    onDishSelected(dish){
        this.setState({selectedDish: dish});
    }

    

    render(){

            
        const menu= this.props.dishes.map((dish) => {
            return(
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.onDishSelected(dish)} >
                        <CardImg width="100%"  object src={dish.image} alt={dish.name} />
                        <CardImgOverlay> 
                            <CardTitle> {dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return(
            <div className="container"> 
                <div className="row mt-3">
                        {menu}
                </div>
                    <DishDetail  dish={this.state.selectedDish}/>
            </div>

        );

    };

}

export default Menu;