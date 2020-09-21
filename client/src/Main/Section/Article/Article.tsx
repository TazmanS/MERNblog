import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {userExit} from '../../../actions/user'
import Comments from './Comments'
import {getAllArticles} from '../../../actions/articles'
import {deleteArticle} from '../../../actions/articlesAuthor'

interface Article {
    history: any,
    article: any,
    deleteArticle(articleId): void,
    getAllArticles(): void
}

const Article:React.FC<Article> = ({ history, article, deleteArticle, getAllArticles }) => {

    useEffect(() => {
        if(article._id){
            document.title = article.title    
        } else {
            history.push('/')
        }
    }, [article,history])

    const deleteArticleFunction = async () => {
        await deleteArticle(article._id)
        await getAllArticles()
        await history.push('/')
    }

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
            {article.author === "Автор удален"
                ? <button className="btn btn-danger btn-sm"
                    onClick={deleteArticleFunction}
                    >Удалить статью</button>
                : null
            }
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

function mapDispatchToProps(dispatch){
    return{
        userExit: () => dispatch( userExit() ),
        deleteArticle: articleId => dispatch( deleteArticle(articleId) ),
        getAllArticles: () => dispatch( getAllArticles() )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Article)
