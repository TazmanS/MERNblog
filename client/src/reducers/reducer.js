import {combineReducers} from 'redux'


import usersReducers from './usersReducers'
import articlesReducers from './articlesReducers'

const reducer = combineReducers({
    user: usersReducers,
    articles: articlesReducers
})

export default reducer