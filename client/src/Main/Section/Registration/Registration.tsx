import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {verty} from '../../../hooks/verty.hooks'
import {addNewUser} from '../../../actions/user'
import {withRouter} from 'react-router-dom'
import InputGroupItem from './InputGroupItem'

interface Reg {
    addNewUser(newUserData) :any,
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
    const [inputPassword, setInputPassword] = useState('')
    const [inputPasswordRepeat, setInputPasswordRepeat] = useState('')
    const [checkPass, setCheckPass] = useState(true)

    const loginChangeFunction = event => {
        setInputLogin(event.target.value)
    }

    const passwordChangeFunction = event =>{
        setInputPassword(event.target.value)

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

        if( !vertyCheck ){
            alert("Ошибка длины пароля")
            return false
        }

        if (vertyCheck && checkPass){
            let newUserData = {
                login: inputLogin,
                password: inputPassword
            }
            
            await addNewUser(newUserData)

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
    <InputGroupItem inputtext={inputLogin} min={5} max={16} htmlfor="regInputLogin"
        labeltext="Логин (5 - 16 символов)" inputtype="login" id={"regInputLogin"}
        placeholder="Login" inputvalue={inputLogin} inputfunc={loginChangeFunction}
    />
    <InputGroupItem inputtext={inputPassword} min={5} max={16} htmlfor="regInputPass"
        labeltext="Пароль (5 - 16 символов)" inputtype="password" id={"regInputPass"}
        placeholder="Password" inputvalue={inputPassword} inputfunc={passwordChangeFunction}
    />
    <InputGroupItem inputtext={inputPasswordRepeat} min={5} max={16} htmlfor="regInputPassAgain"
        labeltext="Repeat password" inputtype="password" id={"regInputPassAgain"}
        placeholder="Password" inputvalue={inputPasswordRepeat} inputfunc={passwordRepeatChangeFunction}
    />
    <button type="submit" className="btn btn-primary"
        onClick={(event) => addNewUserFunction(event)}
    >Registration</button>
    { checkPass
        ? <p></p>
        : <small>Пароли не совпадают</small>
    }
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
