import React from 'react'
import { verty } from '../../../hooks/verty.hooks'

interface InputGroupItem {
    inputtext: string, 
    min: number, 
    max: number, 
    htmlfor: string, 
    labeltext: string,
    inputtype: string,
    id: string,
    placeholder: string,
    inputvalue: string,
    inputfunc: any,
}   

const InputGroupItem:React.FC<InputGroupItem> = ({
    inputtext, min, max, htmlfor, labeltext, inputtype, id, placeholder, inputvalue, inputfunc
}) => {
    return (
        <div className="form-group">
            <label htmlFor={htmlfor}> {labeltext} </label>
            <input type={inputtype} 
                className={verty(min,max,inputtext)
                    ? "form-control active-border-green"
                    : "form-control active-border-red"} 
                id={id}
                placeholder={placeholder}
                value={inputvalue}
                onChange={(event) => inputfunc(event)} />
            <div className="valid-feedback">
                Looks good!
            </div>
            <div className="invalid-feedback">
                Please choose a username.
            </div>
        </div>
    )
}

export default InputGroupItem