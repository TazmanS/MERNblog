import React from 'react'

const Login:React.FC = () =>{
    return(
        <form>
            <div className="form-group">
                <input type="email" className="form-control" id="loginInpEmail" placeholder="Введите email" />
            </div>
            <div className="form-group">
                <input type="password" className="form-control" id="loginInpPass" placeholder="Пароль" />
            </div>
            <button type="submit" className="btn btn-primary">Войти</button>
        </form>
    )
}

export default Login