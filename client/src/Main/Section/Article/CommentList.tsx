import React from 'react'
import {connect} from 'react-redux'
import {deleteComment} from '../../../actions/articleAuthor'


interface CommentList {
    article: any,
    deleteComment(commentIndex, articleId) :void,
    userId: string
}

const CommentList:React.FC<CommentList> = ({
    article,
    deleteComment,
    userId }):any => {

        
    const deleteCommentFunction = async commentIndex => {
        await deleteComment(commentIndex, article._id)
    }


const commentList = article.comments.map((one, index) => {
    return(
        <div key={index} className="commentList">
            <p>
                <small>{index + 1}. {one.login}</small> - {one.comment}
            </p>
            { userId === article.authorId
                ?   <button className="btn btn-danger btn-sm"
                        onClick={() => deleteCommentFunction(index)}
                    >Delete</button>
                :   null }

        </div>
    )
})

    return (
        <React.Fragment>
            {commentList}
        </React.Fragment>
    )
}

function mapStateToProps(state) {
    return {
        userId: state.user.id,
        article: state.article.article
    }
}

function mapDispatchToProps(dispatch) {
    return {
        deleteComment: (commentIndex, articleId) => dispatch( deleteComment(commentIndex, articleId) )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CommentList)
