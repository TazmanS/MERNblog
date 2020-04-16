import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {changePage} from '../actions/articleAction'

interface Pagination {
    changePage(indexPage): void,
    activePage: Number,
    page: Number
}

const Pagination:React.FC<Pagination> = ({page, changePage, activePage = 0}) =>{

    const [pagination, setPagination] = useState<number[]>([])

    useEffect(() => {
        function paginationFunction(){
            let arr: number[] = []
            for(let i = 0; i < page; i++){
                arr.push(i)
            }
            setPagination(arr)
        }

        paginationFunction()
    }, [page])

    

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
        <div>
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    {paginationMenu}
                </ul>
            </nav>    
        </div>
    )
}

function mapStateToProps(state){
    return{
        page: state.articles.page,
        activePage: state.articles.activePage
    }
}

function mapDispatchToProps(dispatch){
    return{
        changePage: indexPage => dispatch( changePage(indexPage) )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Pagination)