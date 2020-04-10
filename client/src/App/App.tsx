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
import Article from '../Article/Article'
import RedactorArticle from '../RedactorArticle/RedactorArticle'
import UserSettings from '../UserSettings/UserSettings'
import UserDelete from '../UserSettings/UserDelete'


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
      <div className="container App">
        <div className="row Content">
          <div className="col-12">
            <Navigation />
          </div>
          <div className="col-12 order-2 order-lg-1 col-lg-8 content">
            <Switch>
              <Route path="/" exact component={Content} />
              <Route path="/registration" exact component={Registration} /> 
              <Route path="/add" exact component={AddContent} /> 
              <Route path="/article" exact component={Article} />
              <Route path="/redactor" exact component={RedactorArticle} />
              <Route path="/settings" exact component={UserSettings} />
              <Route path="/deleteuser" exact component={UserDelete} />
            </Switch>
          </div>
          <div className="col-12 order-1 order-lg-2 col-lg-3 RnavBar">
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
      userEntranceLocalStorage: userId => dispatch( userEntranceLocalStorage(userId) )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
