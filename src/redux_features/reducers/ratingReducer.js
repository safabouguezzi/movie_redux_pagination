import {RATING} from "../constants/actions-types"

const rate = 0;

 const ratingReducer = (state = rate, action) => {
    switch ( action.type) {
        case  RATING:
            return action.payload;
        default:
            return state
    }
}

export default ratingReducer