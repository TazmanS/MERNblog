import {combineReducers} from 'redux'


import usersReducers from './usersReducers'
import articlesReducers from './articlesReducers'
import articleReducers from './articleReducers'
import authorArticlesReducers from './authorArticlesReducers'
import authorArticleReducers from './authorArticleReducers'
import addOrUpdateArticle from './addOrUpdateArticle'
import ModalWindow from './modalWindow'
import hashTag from './hashTagReducers'

const reducer = combineReducers({
    user: usersReducers,
    articles: articlesReducers,
    article: articleReducers,
    authorArticles: authorArticlesReducers,
    authorArticle: authorArticleReducers,
    addOrUpdate: addOrUpdateArticle,
    modalWindow: ModalWindow,
    hashTag: hashTag
})

export default reducer