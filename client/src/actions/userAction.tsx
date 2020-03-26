import {ADD_NEW_USER_INFORMATION} from './actionTypes'
import axios from 'axios'


export function addNewUser(newUserData) {
    return async dispatch => {
        try{

            axios.post('/api/user/add', newUserData).then( res => {
                dispatch({
                    type: ADD_NEW_USER_INFORMATION,
                    mess: res.data.data,
                    login: res.data.login,
                    id: res.data.id
                })
            })


        } catch(e){
            console.error("Ошибка создания пользователя", e)
        }
    }
}