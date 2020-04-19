import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {getAllAuthorArticles} from '../actions/articleAuthor'
import {deleteArticle} from '../actions/articleAction'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import Pagination from '../Content/Pagination'

interface RedactorArticle {
    getAllAuthorArticles(userId) :any,
    user: any,
    authorArticles: any,
    history: any,
    deleteArticle(articleId) :void,
    getAllArticles() :void
}

const RedactorArticle:React.FC<RedactorArticle> = ({ 
    getAllAuthorArticles, 
    user,
    history,
    deleteArticle,
    getAllArticles,
    authorArticles }) => {
        
    useEffect(() => {
        let local = localStorage.getItem("user")
        if(!local){
            history.push('/')
        }
        getAllAuthorArticles(user.id || local)
    }, [getAllAuthorArticles, user.id, history])

    const deleteArticleFunction = async (articleId) => {
        await deleteArticle(articleId)

        let authorId = localStorage.getItem('user')
        await getAllArticles()
        await getAllAuthorArticles(authorId)
    }

    const body = authorArticles.map((one, index) => {
        return(
            <div key={index} className="article-cart">
                <h3>{one.title}</h3>
                <p>Автор - {one.author}</p>
                <p>Дата написания - {one.date} / Коментов - {one.comments.length}</p>
                <Link className="btn btn-sm btn-success" to={{
                                    pathname: "/article",
                                    index: index
                                }}>Просмотреть статью</Link>
                <Link className="btn btn-sm btn-success" to={{
                                    pathname: "/add",
                                    article: one
                                }}>Редактировать статью</Link>
                <button className="btn btn-sm btn-danger"
                    onClick={ () => deleteArticleFunction(one._id)}
                >Удалить статью</button>
                <hr />
            </div>
            
        )
    })

    return(
        <div>
            {authorArticles.length > 0
            ?   <div>{body}</div>
            :   <p>У Вас нет статей</p>
            }
            <Pagination />
        </div>
    )
}

function mapStateToProps(state){
    return{
        user: state.user,
        authorArticles: state.authorArticles.articles
    }
}

function mapDispatchToProps(dispatch){
    return{
        getAllAuthorArticles: userId => dispatch( getAllAuthorArticles(userId) ),
        deleteArticle: articleId => dispatch( deleteArticle(articleId) ),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RedactorArticle)) 