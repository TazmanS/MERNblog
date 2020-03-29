import React, {useEffect} from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import Navigation from '../Navigation/Navigation'
import RnavBar from '../RnavBar/RnavBar'
import Content from '../Content/Content'
import AddContent from '../AddContent/AddContent'
import {getAllArticles} from '../actions/articleAction'
import {userEntranceLocalStorage} from '../actions/userAction'
import Registration from '../Registration/Registration'


interface App {
  getAllArticles(): void,
  userEntranceLocalStorage(userId): void,
  user: any
}

const App:React.FC<App> = ({ getAllArticles, userEntranceLocalStorage, user }) =>{

  useEffect(() => {
    let userId = localStorage.getItem("user")
    if(userId){
      userEntranceLocalStorage(userId)
    }
    getAllArticles()
  }, [])

  return(
    <Router>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Navigation />
          </div>
        </div>
        <div className="row Content">
          <div className="col-8 content">
            <Switch>
              <Route path="/" exact component={Content} />
              <Route path="/registration" exact component={Registration} /> 
              <Route path="/add" exact component={AddContent} /> 
            </Switch>
          </div>
          <div className="col-3">
            <RnavBar />
          </div>
        </div>
      </div>
    </Router>
  )
}

function mapStateToProps(state){
  return{
    user: state.user
  }
}

function mapDispatchToProps(dispatch){
  return{
      getAllArticles: () => dispatch( getAllArticles() ),
      userEntranceLocalStorage: (userId) => dispatch( userEntranceLocalStorage(userId) )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
