import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import Comments from './Comments'

interface Article {
    history: any,
    article: any,
}

const Article:React.FC<Article> = ({ history, article }) => {

    useEffect(() => {
        if(article._id){
            document.title = article.title || "Title"   
        } else {
            history.push('/')
        }
    }, [article,history])

    return(
<div>
    <div className="container">
        <div className="posts-list">
            <article className="post">
                <div className="post-content">
                <h2 className="post-title">{article.title}</h2>
                    <p>{article.text}</p>
                    <div className="post-footer">
                        Автор: {article.author} - {article.date}
                    </div>
                    <div>Хэдштег: #{article.hashTag.join(" #")}</div>
                </div>
            </article>
            <Comments />
        </div>
    </div>
</div>
    )
}

function mapStateToProps(state){
    return {
        article: state.article.article
    }
}


export default connect(mapStateToProps)(Article)
