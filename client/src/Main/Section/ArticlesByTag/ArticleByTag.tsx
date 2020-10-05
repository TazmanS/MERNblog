import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getOneArticle} from '../../../actions/article'

interface ArticlesByTag {
    articles: any,
    getOneArticle(article) :void
}

const ArticlesByTag:React.FC<ArticlesByTag> = ({articles, getOneArticle}) => {

    const body = articles.map((el, i) => {
        return(
            <div key={i}>
                <Link to="/article" onClick={() => getOneArticle(el)}>{el.title}</Link>
            </div>
        )
    })
    return (
        <div>
            Список статей: 
            {body}
        </div>
    )
}

function mapStateToProps(state) {
    return {
        articles: state.hashTag.articles
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getOneArticle: article => dispatch( getOneArticle(article) )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesByTag)