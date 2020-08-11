import {createStore,combineReducers} from 'redux'
import {dishes} from './reducers/dishes'
import {comments} from './reducers/comments'
import {promotions} from './reducers/promotions'
import {leaders} from './reducers/leaders'


export const ConfigureStore= () =>{
    const store=createStore(
        combineReducers({
            dishes:dishes,
            comments:comments,
            promotions:promotions,
            leaders:leaders
        })
    )
    return store
}