import React from 'react'
import {connect} from 'react-redux'
import {userExit} from '../actions/userAction'
import {Link} from 'react-router-dom'

interface UserMenu {
    user: any,
    userExit(): void
}

const UserMenu:React.FC<UserMenu> = ({user, userExit}) => {
    return(
        <div>
            <div>
                {user.login} - <span className="exit_sp" onClick={userExit}>Exit</span>      
            </div>
            <Link className="navbar-brand" to="/add">Добавить статью </Link>
            <Link className="navbar-brand" to="/add">Редактировать статью </Link>
            <Link className="navbar-brand" to="/add">Удалить статью </Link>
            <Link className="navbar-brand" to="/add">Настройки профиля </Link>
        </div>
    )
}

function mapStateToProps(state){
    return{
        user: state.user
    }
}

function mapDispatchToProps(dispatch){
    return{
        userExit: () => dispatch( userExit() )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu)