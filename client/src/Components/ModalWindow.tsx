import React from 'react' 

interface ModalWindow {
    message: string, 
    showModalWindow(mes): void
}

const ModalWindow:React.FC<ModalWindow> = ({message, showModalWindow}) => {
    return (
        <div className="modalWindow">
            {message} MODALWINDOW
            <button
                onClick={() => showModalWindow('')}
            >Click</button>
        </div>
    )
}

export default ModalWindow