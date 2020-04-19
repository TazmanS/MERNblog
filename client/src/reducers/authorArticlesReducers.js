import {GET_ALL_AUTHOR_ARTICLES, CHANGE_PAGE_AUTHOR} from '../actions/actionTypes'

const initialState = {
    articles: [
        {
            comments: [],
            _id: "",
            title: "",
            text: "",
            date: "",
            author: "",
            authorId: '',
            hashTag: []
        }
    ],
    activePage: 0,
    page: 0,
    articlesNumber: 0
}


const authorArticlesReducers = (state = initialState, action) => {

switch(action.type){

    case GET_ALL_AUTHOR_ARTICLES: 
        return {
            ...state,
            articles: [...action.payload.tenArticles],
            articlesNumber: action.payload.articlesNumber,
            page: Math.ceil(action.payload.articlesNumber/10)
        }
    case CHANGE_PAGE_AUTHOR:
        return{
            ...state,
            articles: [...action.payload.tenArticles],
            activePage: action.activePage
        }

    default: return state
}

}

export default authorArticlesReducers