import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import verty from '../hooks/verty.hooks'
import {addNewUser} from '../actions/userAction'
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
    }, [user.login])

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

        const vertyCheck = verty(inputLogin, inputPassword, inputPasswordRepeat)

        if(inputPassword.length < 5 && inputPassword.length > 16){
            console.log("Не корректный пароль")
            return false
        }

        if (vertyCheck && checkPass){
            let newUserData = {
                login: inputLogin,
                password: inputPassword
            }

            addNewUser(newUserData)

        } else{
            console.error("Ошибка регистарции")
        }

        setInputLogin('')
        setInputPassword('')
        setInputPasswordRepeat('')
    }

    return(
        <form>
            <h4>Регистация нового пользователя</h4>
            <div className="form-group">
                <label htmlFor="regInputLogin">Логин</label>
                <input type="login" className="form-control" id="regInputLogin" placeholder="Введите Логин"
                value={inputLogin} 
                onChange={(event) => loginChangeFunction(event)} />
            </div>
            <div className="form-group">
                <label htmlFor="regInputPass">Пароль (5 - 16 символов)</label>
                <input type="password" className="form-control" id="regInputPass" placeholder="Пароль" 
                value={inputPassword}
                onChange={(event) => passwordChangeFunction(event) }
                />
            </div>
            <div className="form-group">
                <label htmlFor="regInputPassAgain">Повторите Пароль</label>
                <input type="password" className="form-control" id="regInputPassAgain" placeholder="Повторите Пароль" 
                value={inputPasswordRepeat}
                onChange={event => passwordRepeatChangeFunction(event)}
                />
            </div>
            <button type="submit" className="btn btn-primary"
                onClick={(event) => addNewUserFunction(event)}
            >Регистация</button>
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