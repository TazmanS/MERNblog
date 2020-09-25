import React from 'react' 
import {connect} from 'react-redux'

import {hideModalWindow} from '../actions/modalWindow'

interface ModalWindow {
    hideModalWindow() :void,
    modalWindow: any
}

const ModalWindow:React.FC<ModalWindow> = ({hideModalWindow, modalWindow}) => {
    return (
        <div className="modalWindow">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">You have a message:</h5>
                    </div>
                    <div className="modal-body">
                        {modalWindow.message}
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-secondary" 
                            onClick={hideModalWindow}
                        >Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return{
        modalWindow: state.modalWindow
    }
}

function mapDispatchToProps(dispatch) {
    return {
        hideModalWindow: () => dispatch( hideModalWindow() )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ModalWindow)