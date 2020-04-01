import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

interface Article {
    articles: [{
        title: String,
        text: String,
        hashTag: String,
        date: String,
        _id: String,
        author: String
    }]
}

const Content:React.FC<Article> = ({ articles }) => {

    const body = articles.map((one, index) => {

        let shortText = one.text.slice(0,100)

        return(
            <div key={index}>
                <div className="container">
                <div className="posts-list">
                    <article id={`post-${index}`} className="post">
                        <div className="post-content">
                        <h2 className="post-title">{one.title}</h2>
                            <p>{shortText}</p>
                            <div className="post-footer">
                                <Link className="more-link" to={{
                                    pathname: "/article",
                                    article: one
                                }}>Продолжить чтение</Link>
                                Автор: {one.author} - {one.date}
                            </div>
                        </div>
                    </article>
                </div>
            </div>
            </div>
        )
    })

    return(
        <div>{body}</div>
    )
}

function mapStateToProps(state){
    return{
        articles: state.articles
    }
}

export default connect(mapStateToProps)(Content)