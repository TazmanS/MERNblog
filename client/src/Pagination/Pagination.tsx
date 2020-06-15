import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

interface Pagination {
    activePage: Number,
    page: Number,
    changeFunction(index) :void,
}

const Pagination:React.FC<Pagination> = ({page, 
    activePage = 0,
    changeFunction}) =>{
        
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

    const changePageFunction = (index) => {
        changeFunction(index)
    }

    const paginationMenu = pagination.map((one, index) => {
        let active = ""
        if(index === activePage){
            active = ' active'
        }
        return(
            <li className={`page-item ${active}`} key={index}>
                <Link className="page-link"  to="#"
                    onClick={ () => changePageFunction(index)}
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

export default Pagination