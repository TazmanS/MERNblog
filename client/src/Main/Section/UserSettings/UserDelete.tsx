import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {userDelete} from '../../../actions/user'
import {withRouter} from 'react-router-dom'
import {getAllArticles} from '../../../actions/articles'

interface UserDelete{
    userDelete(data): void,
    user: any,
    history: any,
    getAllArticles(): void
}

const UserDelete:React.FC<UserDelete> = ({userDelete, user, history, getAllArticles }) => {

    useEffect(() => {
        if(!localStorage.getItem('user')){
            history.push('/')
        }
        document.title = "Delete user"
    }, [user.login, history])

    const [userPassword, setUserPassword] = useState('')
    const [leaveArticles, setLeaveArticles] = useState(false)

    const userPasswordFunction = event =>{
        setUserPassword(event.target.value)
    }

    const deleteUserFunction = async () => {

        let data = {
            userPassword: userPassword,
            leaveArticles: leaveArticles,
            userId: user.id,
            login: user.login
        }

        await userDelete(data)
        await getAllArticles()

    }

    return(
        <div>
            <h3>Удаление пользователя</h3>
            <div className="form-check">
                <input type="checkbox" className="form-check-input" id="leaveArticle"
                    onChange={() => setLeaveArticles(!leaveArticles)}
                />
                <label className="form-check-label" htmlFor="leaveArticle">Оставить статьи?</label>
            </div>
            < hr />
            <div className="form-group">
                    <label htmlFor="passwordUser">Введите Ваш пароль</label>
                        <div className="hashtagInput">
                        <input
                            type="text"
                            className='form-control'
                            id="passwordUser"
                            placeholder="Пароль"
                            value={userPassword}
                            onChange={ event => userPasswordFunction(event)}
                        />
                        <button className="btn btn-dark"
                            onClick={deleteUserFunction}
                        >Удалить пользователя</button>
                </div>
            </div>

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
        userDelete: (data) => dispatch( userDelete(data) ),
        getAllArticles: () => dispatch( getAllArticles() ),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserDelete))
