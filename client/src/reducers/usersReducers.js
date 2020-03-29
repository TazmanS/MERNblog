import {ADD_NEW_USER_INFORMATION, 
    USER_ENTRANCE,
    USER_ENTRANCE_FALSE,
    USER_EXIT} from '../actions/actionTypes'

const initialState = {
    userCreatingInformation: "",
    login: '',
    id: '',
    userTokenBool: false,
    userEntranceInformation: ''
}

const usersReducers = (state = initialState, action) => {

switch(action.type){

    case ADD_NEW_USER_INFORMATION:
        return{
            ...state,
            userTokenBool: true,
            userCreatingInformation: action.mess,
            login: action.login,
            id: action.id
        }

    case USER_ENTRANCE: 
        return{
            ...state,
            userTokenBool: true,
            login: action.login,
            id: action.id,
        }    

    case USER_ENTRANCE_FALSE:
        return{
            ...state,
            userTokenBool: false,
            userEntranceInformation: action.mess
        }    

    case USER_EXIT:
        return{
            ...state,
            userCreatingInformation: "",
            login: '',
            id: '',
            userTokenBool: false,
            userEntranceInformation: ''
        }    


    default: return state
}

}

export default usersReducers