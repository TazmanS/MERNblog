import {AUTHOR_FLAG_FALSE, AUTHOR_FLAG_TRUE} from '../actions/actionTypes'

const initialState = {
    authorFlag: false
}


const authorFlagReducer = (state = initialState, action) => {

switch(action.type){

    case AUTHOR_FLAG_FALSE: 
        return {
            ...state,
            authorFlag: false
        }
        
    case AUTHOR_FLAG_TRUE: 
        return {
            ...state,
            authorFlag: true
        }

    default: return state
}

}

export default authorFlagReducer