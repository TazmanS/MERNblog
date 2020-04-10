import React from 'react'
import {Link} from 'react-router-dom'

const UserSettings:React.FC = () => {
    return(
        <div>
            <p><Link to='/changepassword'>Изменить пароль</Link></p>
            <p><Link to='/deleteuser'>Удалить пользователя</Link></p>
        </div>
    )
}

export default UserSettings