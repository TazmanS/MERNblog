import {GET_ONE_ARTICLE} from '../actions/actionTypes'

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

    case GET_ONE_ARTICLE:
        console.log(action.payload)
        return {
            article: {...action.payload}
        }

    default: return state
}

}

export default articleReducers