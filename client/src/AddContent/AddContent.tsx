import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {addNewArticle, getAllArticles, updateArticle} from '../actions/articleAction'
import verty from '../hooks/verty.hooks'
import {withRouter} from 'react-router-dom'

interface NewArticle {
    title: String,
    text: String,
    hashTag: Array<any>
}

interface AddArticle {
    addNewArticle(newArticleData: NewArticle) : any,
    history: any,
    user: any,
    getAllArticles(): void,
    updateArticle(newArticleData: NewArticle, articleId: String) : any
}

const AddContent:React.FC<AddArticle> = ({addNewArticle, 
    history, 
    user, 
    getAllArticles, 
    updateArticle}) =>{
    
    const [titleChange, setTitleChange] = useState<string>('')
    const [textChange, setTextChange] = useState<string>('')
    const [hashTagChange, setHashTagChange] = useState<string>('')
    const [vertyInfo, setVertyInfo] = useState<boolean>(true)
    const [hashTagArray, setHashTagArray] = useState([])

    useEffect(() => {
        if(history.location.article){
            setTitleChange(history.location.article.title)
            setTextChange(history.location.article.text)
            setHashTagArray(history.location.article.hashTag)
            setVertyInfo(true)
        }
    }, [history.location.article])

    const titleChangeFunction = event =>{
        setTitleChange(event.target.value)
    }

    const textChangeFunction = event =>{
        setTextChange(event.target.value)
    }

    const hashTagFunction = event => {
        setHashTagChange(event.target.value)
    }

    const hashTagArrayFunction = (event) => {
        event.preventDefault()
        if(verty(hashTagChange)){
            let newArr:any = hashTagArray.concat()
            newArr.push(hashTagChange)
            setHashTagArray(newArr)  
            setHashTagChange('')
        }
    }

    const deleteHashTag = (index) => {
        let newArr = hashTagArray.concat()
        newArr =  newArr.filter((one, i) => i !== index)

        setHashTagArray(newArr)
    }

    const addNewArticleFunction = async () =>{
        try{
            const vertyChek = verty(titleChange, textChange)
            if(vertyChek && hashTagArray.length > 0){
                let newArticleData = {
                    title: titleChange,
                    text: textChange,
                    hashTag: hashTagArray,
                    author: user.login,
                    authorId: user.id
                }
                if(history.location.article){
                    await updateArticle(newArticleData, history.location.article._id )
                } else{
                    await addNewArticle(newArticleData).then(() => getAllArticles())
                }
                
                setTitleChange('')
                setTextChange('')
                setHashTagChange('')
                setVertyInfo(true)
                history.push('/redactor')
                
            } else{
                console.error("Введите коректные данные")
                setVertyInfo(false)
            }
        }catch (e){
            console.log("Че-то пошло не так")
        }
    }

    const hashTagBody = hashTagArray.map((one, index) => {
        return(
            <span key={index}
                className="hashTagItem"
            > #{one} <span className="delete" onClick={() => deleteHashTag(index)}>x</span></span>
        )
    })


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
                <div className="hashtagInput">
                    <input 
                        type="text" 
                        className='form-control'
                        id="hashtag" 
                        placeholder="тортики, рецепты, наптики" 
                        value={hashTagChange}
                        onChange={(event) => hashTagFunction(event)}
                    />
                    <button className="btn btn-dark"
                        onClick={event => hashTagArrayFunction(event)}
                    >Добавить</button>    
                </div>
                <p className="hashTagContainer">
                    {hashTagBody}    
                </p>
            </div>
            <button className="btn btn-primary" onClick={async (event) =>{
                event?.preventDefault()
                addNewArticleFunction()
            }}>{history.location.article
                ? "Редактировать"
                : "Добавить"}</button>
            <span>
                {vertyInfo ? null : <small>Неверный ввод</small>}
            </span>
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
        addNewArticle: (newArticleData) => {
            return dispatch( addNewArticle(newArticleData) ) 
        },
        getAllArticles: () => dispatch( getAllArticles() ),
        updateArticle: (newArticleData, articleId) => dispatch( updateArticle(newArticleData, articleId) )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddContent))