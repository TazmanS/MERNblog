import React from 'react'
import {verty} from '../../../hooks/verty.hooks'
import {ContentFormInterface} from '../../../interfaces'


const ContentForm:React.FC<ContentFormInterface> = ({
    titleChange,
    titleChangeFunction,
    textChange,
    textChangeFunction,
    hashTagChange,
    hashTagFunction,
    hashTagArrayFunction,
    hashTagBody,
    addNewArticleFunction,
    vertyInfo,
    addOUA }) => {
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
        <p>You use {textChange.length} symbols from 3000</p>
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
    }}>{addOUA.title.trim()
        ? "Редактировать"
        : "Добавить"}</button>
    <span>
        {vertyInfo ? null : <small>Неверный ввод</small>}
    </span>
</form>
    )
}

export default ContentForm
