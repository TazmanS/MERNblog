import React from 'react'
import CommentList from './CommentList'
import AddComment from './AddComment'

export interface CommentsInterface {}

const Comments:React.FC<CommentsInterface> = () => {

    return(
        <div>
            <div className="form-group">
                <div className="">
                    <AddComment />
                    <CommentList />
                </div>
            </div>
        </div>
    )
}

export default Comments
