import React, {useState} from 'react'
import {userChangePassword} from '../../../actions/user'
import {connect} from 'react-redux'
import {verty} from '../../../hooks/verty.hooks'

interface ChangePass {
    userChangePassword(data): void,
    user: any
}

const UserChangePass:React.FC<ChangePass> = ({userChangePassword, user}) => {

    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [newPasswordAgain, setNewPasswordAgain] = useState('')

    const oldPasswordFunction = e => {
        setOldPassword(e.target.value)
    }

    const newPasswordFunction = e => {
        setNewPassword(e.target.value)
    }

    const newPasswordAgainFunction = e => {
        setNewPasswordAgain(e.target.value)
    }

    const changeFunction = event => {
        event?.preventDefault()
        if(verty(5, 16, newPassword, newPasswordAgain)) {
            let data = {
                oldPassword, 
                newPassword, 
                newPasswordAgain, 
                userId: user.id
            }    
            userChangePassword(data)
        } else {
            alert("Ошибка в длине паролей")
        }
        
        setOldPassword('')
        setNewPassword('')
        setNewPasswordAgain('')
        
    }

    return (
        <form>
            <div className="form-group">
                <label htmlFor="oldPassword">Введите старый пароль</label>
                <input type="password" className="form-control" 
                    id="oldPassword" placeholder="Old Password" 
                    value={oldPassword}
                    onChange={ e => oldPasswordFunction(e)}/>
            </div>
            <div className="form-group">
                <label htmlFor="newPassword">Введите новый пароль(5-16 символов)</label>
                <input type="password" className="form-control" 
                    id="newPassword" placeholder="New Password" 
                    value={newPassword}
                    onChange={ e => newPasswordFunction(e)}/>
            </div>
            <div className="form-group">
                <label htmlFor="newPasswordAgain">Введите новый пароль еще раз</label>
                <input type="password" className="form-control" 
                    id="newPasswordAgain" placeholder="New Password" 
                    value={newPasswordAgain}
                    onChange={ e => newPasswordAgainFunction(e)}/>
            </div>
            <button type="submit" className="btn btn-primary"
                onClick={changeFunction}
            >Изменить</button>
        </form>
    )
}

function mapStateToProps(state){
    return {
        user: state.user
    }
}

function mapDispatchToProps(dispatch){
    return{
        userChangePassword: (data) => dispatch( userChangePassword(data) )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserChangePass)