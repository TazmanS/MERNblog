import {GET_ALL_ARTICLES} from '../actions/actionTypes'

const initialState = {
    articles: [],
    page: null,
    articlesNumber: 0,
    activePage: 0
}

const articlesReducers = (state = initialState, action) => {

switch(action.type){

    case GET_ALL_ARTICLES:
        return {
            ...state,
            articles: [...action.payload.tenArticles],
            articlesNumber: action.payload.articlesNumber,
            page: Math.ceil(action.payload.articlesNumber/10),
            activePage: action.activePage
        }

    default: return state
}

}

export default articlesReducers