import React from 'react'

interface CommentList {
    userId: any,
    article: any,
    deleteCommentFunction(index) :void
}

const CommentList:React.FC<CommentList> = ({
    userId,
    article,
    deleteCommentFunction }):any => {


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

export default CommentList
