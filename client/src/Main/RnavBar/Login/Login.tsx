import React, {useState} from 'react'
import {connect} from 'react-redux'
import {userEntrance} from '../../../actions/user'

interface Login {
    userEntrance(userData): void,
    user: any
}

const Login:React.FC<Login> = ({ userEntrance, user }) =>{

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    function loginChange(event){
        setLogin(event.target.value)
    }

    function passwordChange(event){
        setPassword(event.target.value)
    }
    
    function userEntranceButton(event){
        event?.preventDefault()
        let userData = {
            login: login,
            password: password
        }
        userEntrance(userData)
    }

    return(
        <form>
            <div className="form-group">
                <input type="email" className="form-control" id="loginInpEmail" placeholder="Введите Логин" 
                value={login} 
                onChange={loginChange}
                />
            </div>
            <div className="form-group">
                <input type="password" className="form-control" id="loginInpPass" placeholder="Пароль" 
                value={password}
                onChange={passwordChange}
                />
            </div>
            <p>{user.userEntranceInformation}</p>
            <button type="submit" className="btn btn-primary"
                onClick={userEntranceButton}
            >Войти</button>
        </form>
    )
}

function mapStateToProps(state){
    return{
        user: state.user
    }
}

function mapDispatchToProps(dispatch){
    return{
        userEntrance: userData => dispatch( userEntrance(userData) )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)