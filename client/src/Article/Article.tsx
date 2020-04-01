import React from 'react'
import {connect} from 'react-redux'
import {userExit} from '../actions/userAction'

interface Article {
    history: any
}

const Article:React.FC<Article> = ({ history }) => {
    return(
        <div>
            <div className="container">
                <div className="posts-list">
                    <article className="post">
                        <div className="post-content">
                        <h2 className="post-title">{history.location.article.title}</h2>
                            <p>{history.location.article.text}</p>
                            <div className="post-footer">
                                Автор: {history.location.article.author} - {history.location.article.date}
                            </div>
                            <div>Хэдштег: #{history.location.article.hashTag.join(" #")}</div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    )
}

function mapStateToProps(state){
    return{
        user: state.user,
        article: state.article
    }
}

function mapDispatchToProps(dispatch){
    return{
        userExit: () => dispatch( userExit() )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Article)