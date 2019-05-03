import { COLOR_CHANGE } from './../actions/types';

export default function(state = 'bg-dark text-white border-light', action){
    switch(action.type) {
        case COLOR_CHANGE:
            return action.payload || false;
        default:
            return state
    }
}