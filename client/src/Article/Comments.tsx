import React, {useState} from 'react'
import {connect} from 'react-redux'
import {addNewComment, changePage} from '../actions/articleAction'
import { changePageAuthor } from '../actions/articleAuthor'
import { store } from '..'

interface Comments {
    login: String,
    addNewComment(article, login, comment) :void
    changePage(activePage) :void,
    activePage: Number,
    authorFlag: Boolean,
    article: any,
    changePageAuthor(activePage) :void
}

const Comments:React.FC<Comments> = ({ 
    login, 
    addNewComment, 
    changePage,
    activePage,
    authorFlag,
    article,
    changePageAuthor }) => {

    const [comment, setComment] = useState('')

    const commentFunction = event => {
        setComment(event.target.value)
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

    const commentList = article.comments.map((one, index) => {
        return(
            <React.Fragment key={index}>
                <p>
                    <small>{index + 1}. {one.login}</small> - {one.comment}
                </p>    
                <hr />
            </React.Fragment>
        )
    })

    return(
        
        <div>
            <div className="form-group">
                <label htmlFor="comments">Коментарии</label>
                <div className="">
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
                    >Добавить коментарий</button>  
                    {commentList}  
                </div>
            </div>
        </div>
        
    )
}

function mapStateToProps(state){
    if(store.getState().authorFlag.authorFlag){
        return{
            login: state.user.login,
            activePage: state.authorArticles.activePage,
            authorFlag: state.authorFlag.authorFlag
        }
    } else{
        return{
            login: state.user.login,
            activePage: state.articles.activePage,
            authorFlag: state.authorFlag.authorFlag
        }    
    }
}

function mapDispatchToProps(dispatch){
    return{
        addNewComment: (article, login, comment) => dispatch( addNewComment(article, login, comment) ),
        changePage: (activePage) => dispatch( changePage(activePage) ),
        changePageAuthor: (activePage) => dispatch( changePageAuthor(activePage) ),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments)