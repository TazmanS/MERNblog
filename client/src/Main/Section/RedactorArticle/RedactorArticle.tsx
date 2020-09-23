import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {getAllAuthorArticles} from '../../../actions/articlesAuthor' 
import {deleteArticle} from '../../../actions/articlesAuthor'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import Pagination from '../../../Components/Pagination'
import {changePageAuthor} from '../../../actions/articlesAuthor'
import {RedactorArticleInterface} from '../../../interfaces'
import {getOneArticle} from '../../../actions/article'
import { setUpdateArticle } from '../../../actions/articleAuthor'

const RedactorArticle:React.FC<RedactorArticleInterface> = ({
    getAllAuthorArticles,
    user,
    history,
    deleteArticle,
    authorArticles,
    changePageAuthor,
    page,
    activePage,
    getOneArticle,
    setUpdateArticle }) => {

    useEffect(() => {
        let local = localStorage.getItem("user")
        if(!local){
            history.push('/')
        }
        document.title = "My articles"
        getAllAuthorArticles(user.id || local)
    }, [getAllAuthorArticles, user.id, history])

    const authorArticleFunction = (article) => {
        getOneArticle(article)
    }

    const authorUpdateFunction = (article) => {
        setUpdateArticle(article)
    }

    const deleteArticleFunction = async (articleId) => {
        await deleteArticle(articleId, user.id)
    }

    const body = authorArticles.map((one, index) => {
        return(
            <div key={index} className="article-cart">
                <h3>{one.title}</h3>
                <p>Автор - {one.author}</p>
                <p>Дата написания - {one.date} / Коментов - {one.comments.length}</p>
                <Link className="btn btn-sm btn-success" 
                    to="/article" 
                    onClick={() => authorArticleFunction(one)}
                    >Просмотреть статью</Link>
                <Link className="btn btn-sm btn-success"
                    to="/add"
                    onClick={() => authorUpdateFunction(one)}
                    >Редактировать статью</Link>
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
            <Pagination page={page}
                        activePage={activePage}
                        changeFunction={changePageAuthor}
                        userId={user.id} />
        </div>
    )
}

function mapStateToProps(state){
    return{
        user: state.user,
        authorArticles: state.authorArticles.articles,
        page: state.authorArticles.page, 
        activePage: state.authorArticles.activePage,
    }
}

function mapDispatchToProps(dispatch){
    return{
        getAllAuthorArticles: userId => dispatch( getAllAuthorArticles(userId) ),
        deleteArticle: (articleId, userId) => dispatch( deleteArticle(articleId, userId) ),
        changePageAuthor: (indexPage, userId) => dispatch( changePageAuthor(indexPage, userId) ),
        getOneArticle: (article) => dispatch( getOneArticle(article) ),
        setUpdateArticle: (article) => dispatch( setUpdateArticle(article) ),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RedactorArticle))
