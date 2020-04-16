import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Pagination from './Pagination'

interface Article {
    articles: [{
        title: String,
        text: String,
        hashTag: String,
        date: String,
        _id: String,
        author: String,
        comments: [any]
    }]
}

const Content:React.FC<Article> = ({ articles }) => {

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

    return(
        <React.Fragment>
            <div>{articles.length > 0
                ? body
                : <p>В базе пусто</p>}</div> 
            <Pagination />
        </React.Fragment>
        
    )
}

function mapStateToProps(state){
    return{
        articles: state.articles.articles,
    }
}


export default connect(mapStateToProps)(Content)