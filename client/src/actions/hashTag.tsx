import {GET_ALL_HASH_TAG, GET_ARTICLES_BY_TAG} from './actionTypes'
import axios from 'axios'

// поиск и отображение статей связанных с гэгами

export function getAllHashTag() {
    return async dispatch => {
        try{
            await axios.get('/api/hashtag/all').then(res => {
                dispatch({
                    type: GET_ALL_HASH_TAG,
                    payload: res.data
                })
            })
        } catch(e) {
            console.log(e)
        }
    }
}


export function findArticlesByHashTag(hashTag) {
    return async dispatch => {
        try {
            const data = {
                hashTag
            }

            axios.post('/api/hashtag/articlebytag', data).then(res => {
                dispatch({
                    type: GET_ARTICLES_BY_TAG,
                    payload: res.data
                })
            })
        } catch(e) {
            console.log(e)
        }
    }
}