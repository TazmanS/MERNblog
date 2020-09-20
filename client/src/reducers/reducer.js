import {combineReducers} from 'redux'


import usersReducers from './usersReducers'
import articlesReducers from './articlesReducers'
import articleReducers from './articleReducers'
import authorArticlesReducers from './authorArticlesReducers'
import authorArticleReducers from './authorArticleReducers'

const reducer = combineReducers({
    user: usersReducers,
    articles: articlesReducers,
    article: articleReducers,
    authorArticles: authorArticlesReducers,
    authorArticle: authorArticleReducers
})

export default reducer