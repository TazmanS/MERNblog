import {combineReducers} from 'redux'


import usersReducers from './usersReducers'
import articlesReducers from './articlesReducers'
import authorArticlesReducers from './authorArticlesReducers'
import authorFlagReducers from './authorFlagReducers'

const reducer = combineReducers({
    user: usersReducers,
    articles: articlesReducers,
    authorArticles: authorArticlesReducers,
    authorFlag: authorFlagReducers
})

export default reducer