import {GET_ALL_ARTICLES, DELETE_ARTICLE} from './actionTypes'
import axios from 'axios'
import moment from 'moment'
import {getAllAuthorArticles} from './articleAuthor'

export function getAllArticles(){
    return async dispatch => {
        try{
            await axios.get('/api/article/all')
                .then((res) => {
                    dispatch({
                        type: GET_ALL_ARTICLES,
                        payload: res.data
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

export function updateArticle(newArticleData, articleId) {
    return async dispatch => {
        try{

            const data = {
                newArticleData: newArticleData,
                articleId: articleId
            }
            await axios.post('/api/article/updatearticle', data).then((res) => {
                console.log(res)
            })

        } catch(e){
            console.log(e)
        }
    }
}