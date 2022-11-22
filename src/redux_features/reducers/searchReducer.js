import {SEARCH} from "../constants/actions-types"

const text = "";

 const searchReducer = (state = text, action) => {
    switch ( action.type) {
        case  SEARCH:
            return action.payload;
        default:
            return state
    }
}

export default searchReducer