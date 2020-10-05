import {GET_ALL_HASH_TAG, GET_ARTICLES_BY_TAG} from '../actions/actionTypes'

const initialState = {
    hashTags: [],
    articles: []
}

const hashTagReducers = (state = initialState, action) => {
    switch(action.type){
        case GET_ALL_HASH_TAG:
            return{
                ...state,
                hashTags: [...action.payload]
            }

        case GET_ARTICLES_BY_TAG:
            return{
                ...state,
                articles: [...action.payload]
            }

        default: return {...state}
    }
}

export default hashTagReducers