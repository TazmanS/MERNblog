import React from 'react'
import {Link} from 'react-router-dom'
import {getOneArticle} from '../../../actions/article'
import {connect} from 'react-redux'

interface ContentBody {
    articles: [any],
    getOneArticle(article) :void
}

const ContentBody:React.FC<ContentBody> = ({articles, getOneArticle}) => {

    const getOneArticleFunction = (article) => {
        getOneArticle(article)
    } 

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
                        <Link className="more-link" to="/article"
                            onClick={() => getOneArticleFunction(one) }
                        >Продолжить чтение</Link>
                    </div>
                    <p>Автор: {one.author} - {one.date}
                        <small> (Коментов - {one.comments.length}) </small>
                    </p>
                </div>
            </article>
        </div>
    </div>
</div>
        )
    })

    return (
        <React.Fragment>
            {body}
        </React.Fragment>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        getOneArticle: (article) => dispatch( getOneArticle(article) )
    }
}

export default connect(null, mapDispatchToProps)(ContentBody)
