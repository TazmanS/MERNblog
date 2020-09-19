import React, {useState} from 'react'
import {connect} from 'react-redux'
import {changePage} from '../../../actions/articles'
import {addNewComment} from '../../../actions/article'
import { changePageAuthor } from '../../../actions/articlesAuthor'
import {deleteComment} from '../../../actions/articleAuthor'
import {getAllAuthorArticles} from '../../../actions/articlesAuthor'
import CommentList from './CommentList'
import AddComment from './AddComment'
import {CommentsInterface} from '../../../interfaces'

const Comments:React.FC<CommentsInterface> = ({
    article,
    login,
    activePage,
    authorFlag,
    changePage,
    changePageAuthor,
    deleteComment,
    addNewComment,
    getAllAuthorArticles }) => {

    const [comment, setComment] = useState('')
    const userId = localStorage.getItem('user')

    const commentFunction = event => {
        if(event.target.value.length <= 150) {
            setComment(event.target.value)
        } else {
            setComment(comment)
        }
    }

    const addNewCommentFunction = async () => {
        if(!login.trim()){
            login = "Гость"
        }
        await addNewComment(article, login, comment)
        setComment('')
        if(authorFlag){
            await changePageAuthor(activePage)
        } else{
            await changePage(activePage)
        }
    }

    const deleteCommentFunction = async commentIndex => {
        await deleteComment(commentIndex, article._id)

        await getAllAuthorArticles(userId)
    }

    return(

<div>
    <div className="form-group">
        <div className="">
            <AddComment
                comment={comment}
                commentFunction={commentFunction}
                addNewCommentFunction={addNewCommentFunction}
            />
            <CommentList
                article={article}
                deleteCommentFunction={deleteCommentFunction}
                userId={userId}
            />
        </div>
    </div>
</div>
    )
}

function mapStateToProps(state){
    // authorFlag корректно обновляет страницу после добавления комментария
    return{
        login: state.user.login,
        authorFlag: state.authorFlag.authorFlag,
        // activePage: store.getState().authorFlag.authorFlag
        //     ? state.authorArticles.activePage
        //     : state.articles.activePage
    }
}

function mapDispatchToProps(dispatch){
    return{
        addNewComment: (article, login, comment) => dispatch( addNewComment(article, login, comment) ),
        changePage: (activePage) => dispatch( changePage(activePage) ),
        changePageAuthor: (activePage) => dispatch( changePageAuthor(activePage) ),
        deleteComment: (commentIndex, articleId) => dispatch( deleteComment(commentIndex, articleId) ),
        getAllAuthorArticles: (userId) => dispatch( getAllAuthorArticles(userId) ),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments)
