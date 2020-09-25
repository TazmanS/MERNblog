import React, {useEffect} from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {connect} from 'react-redux'

import Header from '../Header/Header'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
import ModalWindow from '../Components/ModalWindow'

import {getAllArticles} from '../actions/articles'
import {userEntranceLocalStorage} from '../actions/user'


interface App {
  getAllArticles(): void,
  userEntranceLocalStorage(userId): void,
  modalWindow: any
}

const App:React.FC<App> = ({ getAllArticles, userEntranceLocalStorage, modalWindow }) =>{

  useEffect(() => {
    let userId = localStorage.getItem("user")
    if(userId){
      userEntranceLocalStorage(userId)
    }
    getAllArticles()
  }, [getAllArticles, userEntranceLocalStorage])

  return(
    <Router>
      <div className="container App">
        <Header />
        <Main />
        <Footer />
        { modalWindow.modalFlag 
        ? <ModalWindow />
        : null}
      </div>
    </Router>
  )
}

function mapStateToProps(state){
  return{
    modalWindow: state.modalWindow
  }
}

function mapDispatchToProps(dispatch){
  return{
      getAllArticles: () => dispatch( getAllArticles() ),
      userEntranceLocalStorage: userId => dispatch( userEntranceLocalStorage(userId) )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
