import React from 'react'
import {connect} from 'react-redux'

interface Article {
    article: [{
        title: String,
        text: String,
        hashTag: String,
        date: String,
        _id: String
    }]
}

const Content:React.FC<Article> = ({ article }) => {

    const body = article.map((one, index) => {
        return(
            <div key={index}>
                <h1>{one.title}</h1>
                <p>{one.text}</p>  
                <p>{one.hashTag}</p>  
                <p>{one.date}</p>
            </div>
        )
    })

    return(
        <div>{body}</div>
    )
}

function mapStateToProps(state){
    return{
        article: state.article
    }
}

export default connect(mapStateToProps)(Content)