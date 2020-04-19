import {GET_ALL_AUTHOR_ARTICLES, 
    AUTHOR_FLAG_TRUE, 
    CHANGE_PAGE_AUTHOR} from './actionTypes'
import axios from 'axios'
import {store} from '../index'

export function getAllAuthorArticles(authorId) {

    return async dispatch => {
        try{
            const data = {
                authorId: authorId
            }
            await axios.post('/api/author/all', data)
                .then( res => {
                    dispatch({
                        type: GET_ALL_AUTHOR_ARTICLES,
                        payload: res.data
                    })
                })
                .then(() => dispatch({ type: AUTHOR_FLAG_TRUE}))
        } catch (e){
            console.log(e)
        }
    }
}

export function changePageAuthor(indexPage){
    return async dispatch =>{
        try{
            const data = {
                indexPage: indexPage,
                authorId: store.getState().user.id
            }
            await axios.post('/api/author/changepageauthor', data).then( res => {
                dispatch({
                    type: CHANGE_PAGE_AUTHOR,
                    payload: res.data,
                    activePage: indexPage
                })
            })
            
        } catch(e){
            console.log(e)
        }
    }
}