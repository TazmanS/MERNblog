import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {addNewArticle, getAllArticles, updateArticle} from '../actions/articleAction'
import {verty} from '../hooks/verty.hooks'
import {withRouter} from 'react-router-dom'
import ContentForm from './ContentForm'
import {AddArticle} from '../interfaces'


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
            document.title = "Redactor article"
        } else{
            document.title = "Add article"
        }
    }, [history.location.article])

    const titleChangeFunction = event =>{
        setTitleChange(event.target.value)
    }

    const textChangeFunction = event =>{
        if(event.target.value.length > 3000){
            return false
        } else{
            setTextChange(event.target.value)
        }
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
        <ContentForm
            titleChange={titleChange}
            titleChangeFunction={titleChangeFunction}
            textChange={textChange}
            textChangeFunction={textChangeFunction}
            hashTagChange={hashTagChange}
            hashTagFunction={hashTagFunction}
            hashTagArrayFunction={hashTagArrayFunction}
            hashTagBody={hashTagBody}
            addNewArticleFunction={addNewArticleFunction}
            history={history}
            vertyInfo={vertyInfo}
        />
    )
}

function mapStateToProps(state){
    return{
        user: state.user
    }
}

function mapDispatchToProps(dispatch){
    return{
        addNewArticle: newArticleData => dispatch( addNewArticle(newArticleData) ),
        getAllArticles: () => dispatch( getAllArticles() ),
        updateArticle: (newArticleData, articleId) => dispatch( updateArticle(newArticleData, articleId) )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddContent))
