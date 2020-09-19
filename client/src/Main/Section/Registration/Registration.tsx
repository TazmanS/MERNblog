import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {verty} from '../../../hooks/verty.hooks'
import {addNewUser} from '../../../actions/user'
import {withRouter} from 'react-router-dom'

interface Reg {
    addNewUser(newUserData) :void,
    user: any,
    history: any
}

const Registration:React.FC<Reg> = ({ addNewUser, user, history }) =>{

    useEffect(() => {
        if(user.login){
            history.push('/')
        }
        document.title = "Registration"
    }, [user.login, history])

    const [inputLogin, setInputLogin] = useState('')
    const [inputLoginClass, setInputLoginClass] = useState('form-control')
    const [inputPassword, setInputPassword] = useState('')
    const [inputPasswordClass, setInputPasswordClass] = useState('form-control')
    const [inputPasswordRepeat, setInputPasswordRepeat] = useState('')
    const [checkPass, setCheckPass] = useState(true)

    const loginChangeFunction = event => {
        setInputLogin(event.target.value)

        if( verty(5, 16,event.target.value) ){
            setInputLoginClass('form-control is-valid')
        } else{
            setInputLoginClass('form-control is-invalid')
        }
    }


    const passwordChangeFunction = event =>{
        setInputPassword(event.target.value)

        if( verty(5,16,event.target.value) ){
            setInputPasswordClass('form-control is-invalid')
        } else{
            setInputPasswordClass('form-control is-valid')
        }

        if(inputPasswordRepeat === event.target.value){
            setCheckPass(true)
        } else{
            setCheckPass(false)
        }
    }

    const passwordRepeatChangeFunction = event =>{
        setInputPasswordRepeat(event.target.value)

        if(inputPassword === event.target.value){
            setCheckPass(true)
        } else{
            setCheckPass(false)
        }
    }

    const addNewUserFunction = async (event) => {
        event?.preventDefault()

        const vertyCheck = verty(5, 16, inputLogin, inputPassword, inputPasswordRepeat)

        if( verty(5,16,inputPassword) ){
            alert("Ошибка длины пароля")
            return false
        }

        if (vertyCheck && checkPass){
            let newUserData = {
                login: inputLogin,
                password: inputPassword
            }

            addNewUser(newUserData)

        } else{
            alert("Ошибка регистрации")
        }

        setInputLogin('')
        setInputPassword('')
        setInputPasswordRepeat('')
    }

    return(
<form>
    <h4>Регистация нового пользователя</h4>
    <div className="form-group">
        <label htmlFor="regInputLogin">Логин (5 - 16 символов) </label>
        <input type="login" className={inputLoginClass} id="regInputLogin" placeholder="Login"
        value={inputLogin}
        onChange={(event) => loginChangeFunction(event)} />
        <div className="valid-feedback">
            Looks good!
        </div>
        <div className="invalid-feedback">
            Please choose a username.
        </div>
    </div>
    <div className="form-group">
        <label htmlFor="regInputPass">Пароль (5 - 16 символов)</label>
        <input type="password" className={inputPasswordClass} id="regInputPass" placeholder="Password"
        value={inputPassword}
        onChange={(event) => passwordChangeFunction(event) }
        />
        <div className="valid-feedback">
            Looks good!
        </div>
        <div className="invalid-feedback">
            Please choose a password.
        </div>
    </div>
    <div className="form-group">
        <label htmlFor="regInputPassAgain">Repeat password</label>
        <input type="password" className="form-control" id="regInputPassAgain" placeholder="Repeat password"
        value={inputPasswordRepeat}
        onChange={event => passwordRepeatChangeFunction(event)}
        />
    </div>
    <button type="submit" className="btn btn-primary"
        onClick={(event) => addNewUserFunction(event)}
    >Registration</button>
    { checkPass
        ? <p></p>
        : <small>Пароли не совпадают</small>
    }
    <p>{user.userCreatingInformation}</p>
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
        addNewUser: newUserData => dispatch( addNewUser(newUserData) )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Registration))
