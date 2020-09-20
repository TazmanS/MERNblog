import {GET_ONE_ARTICLE} from './actionTypes'
import axios from 'axios'


// для отображения одной статьи не в разделе автора

export function addNewComment(article, login, comment){
    return async dispatch => {
        try{
            let data = {
                id: article._id, login, comment
            }

            await axios.post('/api/article/addnewcomment', data)


        } catch(e){
            console.log(e)
        }
    }
}

export function getOneArticle(article) {
    return async dispatch => {
        try {
            dispatch({
                type: GET_ONE_ARTICLE, 
                payload: article
            })
        } catch(e) {
            console.log(e)
        }
    }
}


