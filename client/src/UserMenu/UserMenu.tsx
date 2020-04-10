import React from 'react'
import {connect} from 'react-redux'
import {userExit} from '../actions/userAction'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom'


interface UserMenu {
    user: any,
    userExit(): void,
    history: any
}

const UserMenu:React.FC<UserMenu> = ({user, userExit, history}) => {
    return(
        <div>
            <div>
                {user.login} - <span className="exit_sp" onClick={() => {
                    history.push('/')
                    userExit() }}
                    >Exit</span>      
            </div>
            <Link className="navbar-brand" to="/add">Добавить статью </Link>
            <Link className="navbar-brand" to="/redactor">Список моих работ </Link>
            <Link className="navbar-brand" to="/settings">Настройки профиля </Link>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserMenu)) 