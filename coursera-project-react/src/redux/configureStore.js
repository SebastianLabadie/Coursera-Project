import {createStore,combineReducers,applyMiddleware} from 'redux'
import {dishes} from './reducers/dishes'
import {comments} from './reducers/comments'
import {promotions} from './reducers/promotions'
import {leaders} from './reducers/leaders'
import thunk from 'redux-thunk'
import logger from 'redux-logger'


export const ConfigureStore= () =>{
    const store=createStore(
        combineReducers({
            dishes:dishes,
            comments:comments,
            promotions:promotions,
            leaders:leaders
        }),
        applyMiddleware(thunk,logger)
    )
    return store
}