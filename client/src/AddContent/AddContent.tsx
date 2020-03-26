import React, {useState} from 'react'
import {connect} from 'react-redux'
import {addNewArticle} from '../actions/articleAction'
import verty from '../hooks/verty.hooks'
import {withRouter} from 'react-router-dom'

interface NewArticle {
    title: String,
    text: String,
    hashTag: String
}

interface AddArticle {
    addNewArticle(newArticleData: NewArticle) : void,
    history: [any]
}

const AddContent:React.FC<AddArticle> = ({addNewArticle, history}) =>{
    
    const [titleChange, setTitleChange] = useState<string>('')
    const [textChange, setTextChange] = useState<string>('')
    const [hashTagChange, setHashTagChange] = useState<string>('')
    const [vertyInfo, setVertyInfo] = useState<boolean>(true)

    const titleChangeFunction = event =>{
        setTitleChange(event.target.value)
    }

    const textChangeFunction = event =>{
        setTextChange(event.target.value)
    }

    const hashTagFunction = event => {
        setHashTagChange(event.target.value)
    }

    const addNewArticleFunction = async () =>{
        try{
            const vertyChek = verty(titleChange, textChange, hashTagChange)
            if(vertyChek){
                let newArticleData = {
                    title: titleChange,
                    text: textChange,
                    hashTag: hashTagChange
                }
                addNewArticle(newArticleData)
                setTitleChange('')
                setTextChange('')
                setHashTagChange('')
                setVertyInfo(true)
                history.push('/')
                
            } else{
                console.error("Введите коректные данные")
                setVertyInfo(false)
            }

        }catch (e){
            console.log("Че-то пошло не так")
        }
    }


    return(
        <form>
            <div className="form-group">
                <label htmlFor="title">Название статьи</label>
                <input type="text" 
                    className={verty(titleChange) 
                        ? "form-control active-border-green" 
                        : "form-control active-border-red"}
                    id="title" 
                    placeholder="Как испечь вкусный тортик" 
                    value={titleChange}
                    onChange={ event => titleChangeFunction(event)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="text">Текст статьи</label>
                <textarea 
                    className={verty(textChange) 
                        ? "form-control active-border-green" 
                        : "form-control active-border-red"} 
                    id="text" 
                    rows={5}
                    value={textChange}
                    onChange={ event => textChangeFunction(event)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="hashtag">Хэдштег</label>
                <input 
                    type="text" 
                    className={verty(hashTagChange) 
                        ? "form-control active-border-green" 
                        : "form-control active-border-red"} 
                    id="hashtag" 
                    placeholder="тортики, рецепты, наптики" 
                    value={hashTagChange}
                    onChange={(event) => hashTagFunction(event)}
                />
            </div>
            <button className="btn btn-primary" onClick={async (event) =>{
                event?.preventDefault()
                addNewArticleFunction()
            }}>Добавить</button>
            <span>
                {vertyInfo ? null : <small>Неверный ввод</small>}
            </span>
        </form>
    )
}

function mapDispatchToProps(dispatch){
    return{
        addNewArticle: (newArticleData) => {
            return dispatch( addNewArticle(newArticleData) ) 
        }
    }
}

export default withRouter(connect(null, mapDispatchToProps)(AddContent))