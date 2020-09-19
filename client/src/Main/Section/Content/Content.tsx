import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import Pagination from './Pagination'
import {changePage} from '../../../actions/articles'
import ContentBody from './ContentBody'
import {ArticleInterface} from '../../../interfaces'

const Content:React.FC<ArticleInterface> = ({ articles, page, activePage, changePage }) => {

    useEffect(() => {
        document.title = `Page ${+activePage + 1}`
    }, [activePage])

    return(
        <React.Fragment>
            <div>{articles.length > 0
                ? <ContentBody articles={articles} />
                : <p>В базе пусто</p>}</div>
            <Pagination page={page}
                        activePage={activePage}
                        changeFunction={changePage}/>
        </React.Fragment>

    )
}

function mapStateToProps(state){
    return{
        articles: state.articles.articles,
        page: state.articles.page,
        activePage: state.articles.activePage,
    }
}

function mapDispatchToProps(dispatch){
    return{
        changePage: indexPage => dispatch( changePage(indexPage) ),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Content)
