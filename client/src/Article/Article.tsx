import React from 'react'
import {connect} from 'react-redux'
import {userExit} from '../actions/userAction'
import Comments from './Comments'

interface Article {
    history: any,
    articles: any
}

const Article:React.FC<Article> = ({ history, articles }) => {

    const {index = 0} = history.location
    return(
        <div>
            <div className="container">
                <div className="posts-list">
                    <article className="post">
                        <div className="post-content">
                        <h2 className="post-title">{articles[index].title}</h2>
                            <p>{articles[index].text}</p>
                            <div className="post-footer">
                                Автор: {articles[index].author} - {articles[index].date}
                            </div>
                            <div>Хэдштег: #{articles[index].hashTag.join(" #")}</div>
                        </div>
                    </article>
                    <Comments index={index}/>
                </div>
            </div>
        </div>
    )
}

function mapStateToProps(state){
    return{
        user: state.user,
        articles: state.articles.articles
    }
}

function mapDispatchToProps(dispatch){
    return{
        userExit: () => dispatch( userExit() )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Article)