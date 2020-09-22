import {GET_ONE_ARTICLE,
        SET_UPDATE_ARTICLE,
        CLEAN_UPDATE_ARTICLE_FORM} from './actionTypes'
import axios from 'axios'


// для отображения статьи в разделе автора

export function updateArticle(newArticleData, articleId) {
    return async dispatch => {
        try{
            const data = {
                newArticleData: newArticleData,
                articleId: articleId
            }
            await axios.post('/api/article/updatearticle', data).then((res) => {
                console.log("Статья обновлена")
            })
        } catch(e){
            console.log(e)
        }
    }
}

export function deleteComment(commentIndex, articleId) {
    return async dispatch => {
        try {
            const data = {
                commentIndex,
                articleId
            }
            await axios.post('/api/author/deletecomment', data).then( res => {
                dispatch({
                    type: GET_ONE_ARTICLE, 
                    payload: res.data
                })
            })

        } catch(e) {
            console.log(e)
        }
    }
}

export const setUpdateArticle = (article) => {
    return dispatch => {
        dispatch({
            type: SET_UPDATE_ARTICLE,
            payload: article
        })
    }
}

export const cleanUpdateArticleForm = () => {
    return dispatch => {
        dispatch({
            type: CLEAN_UPDATE_ARTICLE_FORM
        })
    }
}
