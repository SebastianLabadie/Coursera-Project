import { PROMOTIONS } from '../../test_data/promotions';
import * as ActionType from '../actions/ActionType'

export const promotions = (state  = { isLoading: true,
                        errMess: null,
                        promotions:[]}, action) => {
            switch (action.type) {
            case ActionType.ADD_PROMOS:
            return {...state, isLoading: false, errMess: null, promotions: action.payload};

            case ActionType.PROMOS_LOADING:
            return {...state, isLoading: true, errMess: null, promotions: []}

            case ActionType.PROMOS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

            default:
            return state;
            }
        };