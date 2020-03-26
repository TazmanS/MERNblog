import {GET_ALL_ARTICLE} from './actionTypes'
import axios from 'axios'
import moment from 'moment'

export function getAllArticles(){
    return async dispatch => {
        try{
            await axios.get('/api/article/all')
                .then((res) => {
                    dispatch({
                        type: GET_ALL_ARTICLE,
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

            console.log({...newArticleData, date})

            const data = {...newArticleData, date}
            
            await axios.post('/api/article/add', data).then(() => {
                console.log("Article add React")
            })
        } catch(e){
            console.log(e)
        }
    }
}