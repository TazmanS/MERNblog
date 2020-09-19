import {combineReducers} from 'redux'


import usersReducers from './usersReducers'
import articlesReducers from './articlesReducers'
import authorArticlesReducers from './authorArticlesReducers'
import authorArticleReducers from './authorArticleReducers'

const reducer = combineReducers({
    user: usersReducers,
    articles: articlesReducers,
    authorArticles: authorArticlesReducers,
    authorArticle: authorArticleReducers
})

export default reducer