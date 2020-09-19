import React from 'react'
import Login from './Login/Login'
import {connect} from 'react-redux'
import UserMenu from './UserMenu/UserMenu'

interface RnavBar {
    user: any
}

const RnavBar:React.FC<RnavBar> = ({ user }) =>{
    return (
        <div>
            {user.id
                ? <UserMenu />
                : <Login />
            }
        </div>
    )
}

function mapStateToProps(state){
    return{
        user: state.user
    }
}

export default connect(mapStateToProps)(RnavBar)