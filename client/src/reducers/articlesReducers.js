import {GET_ALL_ARTICLES, CHANGE_PAGE} from '../actions/actionTypes'

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
    activePage: 0, //which page is activing now(pagination)
    page: 0,    // total pages 
    articlesNumber: 0 // total articles
}

const articlesReducers = (state = initialState, action) => {

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

export default articlesReducers