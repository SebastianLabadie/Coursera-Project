import { COMMENTS } from '../../test_data/comments';
import * as ActionType from '../actions/ActionType'


export const comments= (state=COMMENTS,action)=>{
    switch(action.type){
        case ActionType.ADD_COMMENT:
            let comment=action.payload
            comment.id=state.length
            comment.date=new Date().toISOString()
            return state.concat(comment)
        default:return state
    }
}