import {
    EMPLYEES_FETCH_SUCCESS
} from "../actions/types";

const INTIAL_STATE = {};

export default (state = INITIAL_STATE, action)=>{
    switch(action.type) {
        case EMPLYEES_FETCH_SUCCESS:
            return action.payload;
        default:
            return state;
    };
};
