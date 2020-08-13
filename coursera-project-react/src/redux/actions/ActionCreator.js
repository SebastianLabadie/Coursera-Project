import * as ActionType from './ActionType'
import { DISHES } from '../../test_data/dishes';

export const addComment= (dishId,rating,author,comment) =>{
    return({
        type:ActionType.ADD_COMMENT,
        payload: {
            dishId:dishId,
            rating:rating,
            author:author,
            comment:comment
        }
    })
}

export const fetchDishes= () => (dispatch) =>{
    dispatch(dishesLoading(true))
    setTimeout(()=>{
        dispatch(addDishes(DISHES))
    },2000)
}

export const dishesLoading = () => ({
    type: ActionType.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
    type: ActionType.DISHES_FAILED,
    payload: errmess
});

export const addDishes = (dishes) => ({
    type: ActionType.ADD_DISHES,
    payload: dishes
});