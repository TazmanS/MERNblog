import {GET_ALL_AUTHOR_ARTICLES} from './actionTypes'
import axios from 'axios'

export function getAllAuthorArticles(authorId) {

    return async dispatch => {
        try{
            const data = {
                authorId: authorId
            }
            await axios.post('/api/author/all', data).then( res => {
                dispatch({
                    type: GET_ALL_AUTHOR_ARTICLES,
                    payload: res.data
                })
            })
        } catch (e){
            console.log(e)
        }
    }
}