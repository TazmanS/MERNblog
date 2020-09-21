import React, {useState} from 'react'
import {connect} from 'react-redux'

import {addNewComment} from '../../../actions/article'


interface AddComment {
    login: string,
    article: object,
    addNewComment(article, login, comment): void
}

const AddComment:React.FC<AddComment> = ({login, article, addNewComment}):any => {

    const [comment, setComment] = useState('')

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
        if(comment.trim()){
            await addNewComment(article, login, comment)
            setComment('')    
        } else {
            alert("Введите Ваш коментарий")
        }
    }

    return (
        <React.Fragment>
            <label htmlFor="comments">Коментарии</label>
            <textarea
                className='form-control'
                id="comments"
                placeholder="Напишите свое мнение"
                value={comment}
                onChange={ event => {
                    commentFunction(event)
                }}
            />
            <button className="btn btn-dark"
                onClick={ addNewCommentFunction }
            >Добавить коментарий</button> {comment.length} / 150 символов
        </React.Fragment>
    )
}

function mapStateToProps(state){
    return{
        login: state.user.login,
        article: state.article.article
    }
}

function mapDispatchToProps(dispatch){
    return{
        addNewComment: (article, login, comment) => dispatch( addNewComment(article, login, comment) )    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddComment)
