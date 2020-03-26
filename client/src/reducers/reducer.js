import {combineReducers} from 'redux'


import usersReducers from './usersReducers'
import articleReducers from './articleReducers'

const reducer = combineReducers({
    user: usersReducers,
    article: articleReducers
})

export default reducer