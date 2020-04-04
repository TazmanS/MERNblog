import {combineReducers} from 'redux'


import usersReducers from './usersReducers'
import articlesReducers from './articlesReducers'
import authorArticlesReducers from './authorArticlesReducers'

const reducer = combineReducers({
    user: usersReducers,
    articles: articlesReducers,
    authorArticle: authorArticlesReducers
})

export default reducer