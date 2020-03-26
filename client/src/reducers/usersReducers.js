import {ADD_NEW_USER_INFORMATION} from '../actions/actionTypes'

const initialState = {
    userCreatingInformation: "",
    login: '',
    id: ''
}

const usersReducers = (state = initialState, action) => {

switch(action.type){

    case ADD_NEW_USER_INFORMATION:
        return{
            ...state,
            userCreatingInformation: action.mess,
            login: action.login,
            id: action.id
        }


    default: return state
}

}

export default usersReducers