import {GET_ALL_AUTHOR_ARTICLES} from './actionTypes'
import axios from 'axios'
import moment from 'moment'

//отображение всех статьей в разделе автора + пагинация


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
                .then(() => dispatch({}))
        } catch (e){
            console.log(e)
        }
    }
}

export function changePageAuthor(indexPage) {
    return async dispatch =>{
        try{
            const data = {
                indexPage: indexPage,
            }
            await axios.post('/api/author/changepageauthor', data).then( res => {
                dispatch({
                  payload: res.data,
                  activePage: indexPage
                })
            })

        } catch(e){
            console.log(e)
        }
    }
}

export function addNewArticle(newArticleData){
    return async dispatch => {
        try{
            const date = moment().format('MMMM Do YYYY')

            const data = {...newArticleData, date}

            await axios.post('/api/article/add', data).then(() => {
                console.log("Article add React")
            })
        } catch(e){
            console.log(e)
        }
    }
}

export function deleteArticle(articleId){
    return async dispatch => {
        try{
            const data = {
                articleId: articleId
            }
            await axios.post('/api/article/delete', data).then(res =>{

            })
        } catch(e){
            console.log(e)
        }
    }
}