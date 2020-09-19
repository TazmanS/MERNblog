import {GET_ALL_ARTICLE} from '../actions/actionTypes'

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

const articleReducers = (state = initialState, action) => {

switch(action.type){

    case GET_ALL_ARTICLE:
        return [
            ...action.payload.reverse()
        ]

    default: return state
}

}

export default articleReducers