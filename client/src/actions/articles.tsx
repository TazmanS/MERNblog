import axios from 'axios'
import {GET_ALL_ARTICLES,
    CHANGE_PAGE,
    AUTHOR_FLAG_FALSE
} from './actionTypes'

//отображение всех статьей не а разделе автора + пагинация

export function getAllArticles(){
    return async dispatch => {

        try{
            await axios.get('/api/article/all')
                .then( res => {
                    dispatch({
                        type: GET_ALL_ARTICLES,
                        payload: res.data
                    })
                })
                .then(() => {
                    dispatch({
                        type: AUTHOR_FLAG_FALSE
                    })
                })
        } catch(e){
            console.log(e)
        }
    }
}

export function changePage(indexPage){
    return async dispatch =>{
        try{

            const data = {
                indexPage: indexPage
            }
            await axios.post('/api/article/changepage', data).then( res => {
                dispatch({
                    type: CHANGE_PAGE,
                    payload: res.data,
                    activePage: indexPage
                })
            })

        } catch(e){
            console.log(e)
        }
    }
}