import { COMMENTS } from '../../test_data/comments';
import * as ActionType from '../actions/ActionType'


export const comments= (state={
    errMess:null,
    comments:[]
},action)=>{
    switch(action.type){
        case ActionType.ADD_COMMENTS:
            return {...state, isLoading: false, errMess: null, comments: action.payload};

                
        case ActionType.COMMENTS_FAILED:
            return {...state, isLoading: false, errMess: action.payload,comments:[]};

        case ActionType.ADD_COMMENT:
            let comment=action.payload
            comment.id=state.comments.length
            comment.date=new Date().toISOString()
            return {...state, comments:state.comments.concat(comment)}
        default:return state
    }
}