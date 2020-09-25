import {HIDE_MODAL_WINDOW, SHOW_MODAL_WINDOW} from './actionTypes'

export function hideModalWindow() {
    return dispatch => {
        try{
            dispatch({
                type: HIDE_MODAL_WINDOW
            })
        } catch(e){

        }
    }
}

export function showModalWindow(message) {
    return dispatch => {
        try{
            dispatch({
                type: SHOW_MODAL_WINDOW,
                payload: message
            })
        } catch(e) {
            console.log(e)
        }
    }
}
