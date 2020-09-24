import {ADD_NEW_USER_INFORMATION, 
    USER_ENTRANCE,
    USER_ENTRANCE_FALSE,
    USER_EXIT,
    USER_DELETE} from '../actions/actionTypes'

const initialState = {
    login: '',
    id: '',
}

const usersReducers = (state = initialState, action) => {

switch(action.type){

    case ADD_NEW_USER_INFORMATION:
        return{
            ...state,
            login: action.login,
            id: action.id
        }

    case USER_ENTRANCE: 
        return{
            ...state,
            login: action.login,
            id: action.id,
        }    

    case USER_ENTRANCE_FALSE:
        return{
            ...state
        }    

    case USER_EXIT:
        return{
            ...state,
            login: '',
            id: '',
        }   
        
    case USER_DELETE:
        return{
            login: '',
            id: '',
        }


    default: return state
}

}

export default usersReducers