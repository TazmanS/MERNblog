import {GET_ONE_ARTICLE} from './actionTypes'
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
