import {} from './actionTypes'
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
            await axios.post('/api/author/deletecomment', data)

        } catch(e) {
            console.log(e)
        }
    }
}
