import {HIDE_MODAL_WINDOW, SHOW_MODAL_WINDOW} from '../actions/actionTypes'

const initialState = {
    message: '',
    modalFlag: false
}

const modalWindow = (state = initialState, action) => {
    switch(action.type){
        case HIDE_MODAL_WINDOW:
            return {
                message: '',
                modalFlag: false
            }

        case SHOW_MODAL_WINDOW:
                return{
                    message: action.payload,
                    modalFlag: true
                }

        default: return state
    }
}

export default modalWindow