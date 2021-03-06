import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import {getAllArticles} from '../../actions/articles'
import {connect} from 'react-redux'

interface GetAll {
    getAllArticles(): void,
    user: any,
    articles: any
}

const Navigation:React.FC<GetAll> = ({getAllArticles, user, articles}) => {

    useEffect(() => {

    }, [articles])

    return(
        <nav className="navbar 
            navbar-expand-lg 
            navbar-light 
            text-white
            bg-primary
            justify-content-between">
            <Link className="navbar-brand" to="/" onClick={getAllArticles}>Info Blog</Link>
            <button className="navbar-toggler" 
                type="button" 
                data-toggle="collapse" 
                data-target="#navbarNav" 
                aria-controls="navbarNav" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav col-12 justify-content-end">
                    <li className="nav-item">
                        <Link className="nav-link" to="/"
                            onClick={getAllArticles}
                        >На главную (в базе {articles.articlesNumber} статей) <span className="sr-only">(current)</span></Link>
                    </li>
                    {user.id
                        ? null
                        : <li className="nav-item">
                            <Link className="nav-link" to="/registration">Регистрация</Link>
                        </li>
                    }
                </ul>
            </div>
        </nav>
    )
}

function mapStateToProps(state){
    return{
        user: state.user,
        articles: state.articles
    }
}

function mapDispatchToProp(dispatch){
    return{
        getAllArticles: () => dispatch( getAllArticles() ) 
    }
}

export default connect(mapStateToProps, mapDispatchToProp)(Navigation)