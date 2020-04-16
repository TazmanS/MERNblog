import {GET_ALL_ARTICLES, CHANGE_PAGE} from '../actions/actionTypes'

const initialState = {
    articles: [
        // {
        //     comments: [],
        //     _id: "",
        //     title: "",
        //     text: "",
        //     date: "",
        //     author: "",
        //     authorId: '',
        //     hashTag: []
        // }
    ],
    activePage: null,
    page: null
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

    case CHANGE_PAGE:
        return{
            ...state,
            articles: [...action.payload.tenArticles],
            activePage: action.activePage
        }

    default: return state
}

}

export default articlesReducers