import React from 'react'
import ReactDOM from 'react-dom'
import App from './App/App'
import './index.css'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import reduxThunk from 'redux-thunk'
import reducer from './reducers/reducer'

export const store = createStore(reducer, applyMiddleware(
    reduxThunk
))

const app = 
<Provider store={store}>
    <App />
</Provider>


ReactDOM.render(app, document.getElementById('root'));
