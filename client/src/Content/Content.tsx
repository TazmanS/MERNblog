import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {changePage} from '../actions/articleAction'

interface Article {
    articles: [{
        title: String,
        text: String,
        hashTag: String,
        date: String,
        _id: String,
        author: String
    }],
    page: any,
    changePage(indexPage) :void,
    activePage: Number
}

const Content:React.FC<Article> = ({ articles, page, changePage, activePage = 0 }) => {

    useEffect(() => {
        paginationFunction()
    }, [page])

    const [pagination, setPagination] = useState<number[]>([])

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
                                    article: one
                                }}>Продолжить чтение</Link>
                                Автор: {one.author} - {one.date}
                            </div>
                        </div>
                    </article>
                </div>
                </div>
            </div>
        )
    })

    const paginationFunction = () => {

        let arr: number[] = pagination.concat()

        for(let i = 0; i < page; i++){
            arr.push(i)
        }
        setPagination(arr)
    }
    const paginationMenu = pagination.map((one, index) => {
        let active = ""
        if(index === activePage){
            active = ' active'
        }
        return(
            <li className={`page-item ${active}`} key={index}>
                <Link className="page-link"  to="#"
                    onClick={ () => changePage(index)}
                >{one + 1}</Link>
            </li>
        )
    })

    return(
        <React.Fragment>
            <div>{body}</div> 
            <div>
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        {paginationMenu}
                    </ul>
                </nav>    
            </div>
        </React.Fragment>
        
    )
}

function mapStateToProps(state){
    return{
        articles: state.articles.articles,
        page: state.articles.page,
        activePage: state.articles.activePage
    }
}

function mapDispatchToProps(dispatch){
    return{
        changePage: indexPage => dispatch( changePage(indexPage) )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Content)