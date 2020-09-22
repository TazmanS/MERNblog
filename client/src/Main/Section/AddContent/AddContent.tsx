import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {addNewArticle} from '../../../actions/articlesAuthor'
import {updateArticle} from '../../../actions/articleAuthor'
import {verty} from '../../../hooks/verty.hooks'
import ContentForm from './ContentForm'

export interface AddArticle {
    addNewArticle(newArticleData: any) : any,
    history: any,
    user: any,
    updateArticle(newArticleData: any, articleId: String) : any,
    addOUA: any
}



const AddContent:React.FC<AddArticle> = ({addNewArticle,
    history,
    user,
    updateArticle,
    addOUA}) =>{

    const [titleChange, setTitleChange] = useState<string>('')
    const [textChange, setTextChange] = useState<string>('')
    const [hashTagChange, setHashTagChange] = useState<string>('')
    const [vertyInfo, setVertyInfo] = useState<boolean>(true)
    const [hashTagArray, setHashTagArray] = useState([])

    useEffect(() => {
        if(addOUA.title.trim()){
            setValuesFunction(addOUA)
            document.title = "Redactor article"
        } else{
            setValuesFunction(undefined)
            document.title = "Add article"
        }
    }, [addOUA])

    const setValuesFunction = (value) => {
        setTitleChange(value?.title || '')
        setTextChange(value?.text || '')
        setHashTagArray(value?.hashTag || [])
        setVertyInfo(true)
    }

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
        if(verty(1,16,hashTagChange)){
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
            const vertyChek = verty(5,undefined,titleChange, textChange)
            if(vertyChek && hashTagArray.length > 0){
                let newArticleData = {
                    title: titleChange,
                    text: textChange,
                    hashTag: hashTagArray,
                    author: user.login,
                    authorId: user.id
                }
                if(addOUA.title.trim()){
                    await updateArticle(newArticleData, addOUA._id )
                } else{
                    await addNewArticle(newArticleData)
                }

                setTitleChange('')
                setTextChange('')
                setHashTagChange('')
                setVertyInfo(true)
                history.push('/redactor')

            } else{
                alert("Введите коректные данные")
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
            vertyInfo={vertyInfo}
            addOUA={addOUA}
        />
    )
}

function mapStateToProps(state){
    return{
        user: state.user,
        addOUA: state.addOrUpdate.article //addOrUpdateArticle
    }
}

function mapDispatchToProps(dispatch){
    return{
        addNewArticle: newArticleData => dispatch( addNewArticle(newArticleData) ),
        updateArticle: (newArticleData, articleId) => dispatch( updateArticle(newArticleData, articleId) )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddContent)
