import {SET_UPDATE_ARTICLE,
    CLEAN_UPDATE_ARTICLE_FORM} from '../actions/actionTypes'

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

const addOrUpdateArticle = ( state = initialState, action ) => {
    switch (action.type) {
        case SET_UPDATE_ARTICLE:
            return {
                article: {...action.payload}
            }
        
        case CLEAN_UPDATE_ARTICLE_FORM: 
            return {
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

        default: return state
    }
}

export default addOrUpdateArticle