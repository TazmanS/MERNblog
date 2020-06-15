import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {userExit} from '../actions/userAction'
import Comments from './Comments'
import { store } from '..'
import {deleteArticle, getAllArticles} from '../actions/articleAction'

interface Article {
    history: any,
    articles: any,
    deleteArticle(articleId): void,
    getAllArticles(): void
}

const Article:React.FC<Article> = ({ history, articles, deleteArticle, getAllArticles }) => {
    const {index = 0} = history.location

    useEffect(() => {
        document.title = articles[index].title
    }, [articles, index])

    const deleteArticleFunction = async () => {
        await deleteArticle(articles[index]._id)
        await getAllArticles()
        await history.push('/')
    }

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
                    {articles[index].author === "Автор удален"
                        ? <button className="btn btn-danger btn-sm"
                            onClick={deleteArticleFunction}
                          >Удалить статью</button>
                        : null
                    }
                    <Comments article={articles[index]} />
                </div>
            </div>
        </div>
    )
}

function mapStateToProps(state){
    return {
        articles: store.getState().authorFlag.authorFlag
            ? state.authorArticles.articles
            : state.articles.articles
    }
}

function mapDispatchToProps(dispatch){
    return{
        userExit: () => dispatch( userExit() ),
        deleteArticle: articleId => dispatch( deleteArticle(articleId) ),
        getAllArticles: () => dispatch( getAllArticles() )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Article)
