import React, {useState} from 'react'
import {connect} from 'react-redux'
import {addNewComment, changePage} from '../actions/articleAction'

interface Comments {
    articles: any,
    login: String,
    addNewComment(article, login, comment) :void
    changePage() :void,
    index: any,
    activePage: Number
}

const Comments:React.FC<Comments> = ({ 
    articles, 
    index, 
    login, 
    addNewComment, 
    changePage,
    activePage }) => {

    const article = articles[index]

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

        await changePage()
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
    return{
        login: state.user.login,
        articles: state.articles.articles,
        activePage: state.articles.articles
    }
}

function mapDispatchToProps(dispatch){
    return{
        addNewComment: (article, login, comment) => dispatch( addNewComment(article, login, comment) ),
        changePage: () => dispatch( changePage() )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments)