import React from 'react'
import {Link} from 'react-router-dom'

interface ContentBody {
    articles: [any]
}

const ContentBody:React.FC<ContentBody> = ({articles}) => {
    const body = articles.map((one, index) => {
        let shortText = one.text.slice(0,100)
        return(
<div key={index}>
    <div className="container">
        <div className="posts-list">
            <article id={`post-${index}`} className="post">
                <div className="post-content">
                    <h2 className="post-title">{one.title}</h2>
                    <p>{shortText}</p>
                    <div className="post-footer">
                        <Link className="more-link" to={{
                            pathname: "/article",
                            index: index
                        }}>Продолжить чтение</Link>
                    </div>
                    <p>Автор: {one.author} - {one.date}
                        <small> (Коментов - {one.comments.length}) </small>
                    </p>
                </div>
            </article>
        </div>
    </div>
</div>
        )
    })

    return (
        <React.Fragment>
            {body}
        </React.Fragment>
    )
}

export default ContentBody
