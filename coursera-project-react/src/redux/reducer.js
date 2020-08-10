import { DISHES } from '../test_data/dishes';
import { COMMENTS } from '../test_data/comments';
import { LEADERS } from '../test_data/leaders';
import { PROMOTIONS } from '../test_data/promotions';

export const initialState={
    dishes: DISHES,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders:LEADERS
    
}

export const Reducer= (currentState=initialState,action) =>{
    
    return currentState
}
