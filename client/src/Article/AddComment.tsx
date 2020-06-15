import React from 'react'

interface AddComment {
    comment: any,
    commentFunction(event) :void,
    addNewCommentFunction() :void
}

const AddComment:React.FC<AddComment> = ({
    comment,
    commentFunction,
    addNewCommentFunction}):any => {
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

export default AddComment
