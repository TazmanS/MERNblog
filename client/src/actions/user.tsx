import {ADD_NEW_USER_INFORMATION, 
    USER_ENTRANCE, 
    USER_ENTRANCE_FALSE, 
    USER_EXIT,
    USER_DELETE} from './actionTypes'
import axios from 'axios'
import { showModalWindow } from './modalWindow'


export function addNewUser(newUserData) {
    return async dispatch => {
        try{
            axios.post('/api/user/add', newUserData).then( res => {
                if(res.status === 204){
                    throw Error
                }
                localStorage.setItem('user', res.data.id)
                dispatch({
                    type: ADD_NEW_USER_INFORMATION,
                    mess: res.data.data,
                    login: res.data.login,
                    id: res.data.id
                })
                dispatch( showModalWindow(`Welcome ${res.data.login}`) )
            }).catch(() => dispatch( showModalWindow("User already existed") ) )
        } catch(e){
            console.error("Ошибка создания пользователя", e)
        }
    }
}

export function userEntranceLocalStorage(userId){
    return async dispatch => {
        try{
            const data = {
                userId: userId
            }

            axios.post('/api/user/entrancelocalstorage', data).then( res => {
                dispatch({
                    type: USER_ENTRANCE,
                    login: res.data[0].login,
                    id: res.data[0]._id
                })
            })    
            
        } catch(e){
            console.log("Ошибка входа", e)
        }
    }
}   

export function userEntrance(userData){
    return async dispatch => {
        try{
            await axios.post('/api/user/entrance', userData).then(res => {
                if(res.status === 200){
                    localStorage.setItem("user", res.data[0]._id)
                    dispatch({
                        type: USER_ENTRANCE,
                        login: res.data[0].login,
                        id: res.data[0]._id
                    })
                    dispatch( showModalWindow(`Welcome ${res.data[0].login}`) )
                } else if(res.status === 204){
                    dispatch({
                        type: USER_ENTRANCE_FALSE,
                        mess: res.data
                    })
                    dispatch( showModalWindow("Wrong login or password") )
                }
            })
        } catch(e){
            console.log(e)
        }
    }
}

export function userExit(){
    return async dispatch => {
        try{
            localStorage.removeItem("user")
            dispatch({
                type: USER_EXIT
            })
        } catch(e){
            console.log(e)
        }
    }
}

export function userDelete(data){
    return async dispatch => {
        try{
            await axios.post('/api/user/userdelete', data).then((data) => {
                if(data.status === 201){
                    console.log(data.data)
                } else{
                    console.log("Пользователь удален")
                    localStorage.removeItem('user')
                    dispatch({
                        type: USER_DELETE
                    })
                    dispatch( showModalWindow("User delete") )
                }
            })

        } catch(e){
            console.log(e)
        }
    }
}

export function userChangePassword(data) {
    return async dispatch => {
        try{
            await axios.post('/api/user/changepassword', data).then(res => {
                console.log(res.data)
                return res.data
            })
        } catch(e){
            console.log(e)
        }
    }
}