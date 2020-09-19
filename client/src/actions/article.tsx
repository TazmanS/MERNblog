import {} from './actionTypes'
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


