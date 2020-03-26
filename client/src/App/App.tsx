import React, {useEffect} from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import Navigation from '../Navigation/Navigation'
import RnavBar from '../RnavBar/RnavBar'
import LnavBar from '../LnavBar/LnavBar'
import Content from '../Content/Content'
import AddContent from '../AddContent/AddContent'
import {getAllArticles} from '../actions/articleAction'
import Registration from '../Registration/Registration'


interface App {
  getAllArticles(): void
}

const App:React.FC<App> = ({ getAllArticles }) =>{

  useEffect(() => {
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
        <div className="row">
          <div className="col-3">
            <LnavBar />
          </div>
          <div className="col-6 content">
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

function mapDispatchToProps(dispatch){
  return{
      getAllArticles: () => dispatch( getAllArticles() )
  }
}

export default connect(null, mapDispatchToProps)(App)
