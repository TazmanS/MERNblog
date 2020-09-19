import {GET_ALL_ARTICLES, CHANGE_PAGE} from '../actions/actionTypes'

const initialState = {
    article: {
        comments: [],
        _id: "",
        title: "",
        text: "",
        date: "",
        author: "",
        authorId: '',
        hashTag: [] 
    }
}

const authorArticleReducers = (state = initialState, action) => {

switch(action.type){

    case GET_ALL_ARTICLES:
        return {
            ...state,
            articles: [...action.payload.tenArticles],
            articlesNumber: action.payload.articlesNumber,
            page: Math.ceil(action.payload.articlesNumber/10),
            activePage: 0
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

export default authorArticleReducers