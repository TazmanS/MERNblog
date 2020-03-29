import React from 'react'
import Login from '../Login/Login'
import {connect} from 'react-redux'
import {userExit} from '../actions/userAction'

interface RnavBar {
    user: any,
    userExit(): void
}

const RnavBar:React.FC<RnavBar> = ({ user, userExit }) =>{
    return (
        <div>
            <p>{user.login}</p>
            <Login />
            <button
                className="btn btn-danger"
                onClick={userExit}
            >Exit</button>
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

export default connect(mapStateToProps,mapDispatchToProps)(RnavBar)