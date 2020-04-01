import {GET_ALL_ARTICLES} from '../actions/actionTypes'

const initialState = []

const articlesReducers = (state = initialState, action) => {

switch(action.type){

    case GET_ALL_ARTICLES:
        return [
            ...action.payload.reverse()
        ]

    default: return state
}

}

export default articlesReducers