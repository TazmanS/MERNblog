import {GET_ALL_AUTHOR_ARTICLES} from '../actions/actionTypes'

const initialState = []

const authorArticlesReducers = (state = initialState, action) => {

switch(action.type){

    case GET_ALL_AUTHOR_ARTICLES:
        return [
            ...action.payload
        ]

    default: return state
}

}

export default authorArticlesReducers