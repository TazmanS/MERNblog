import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Registration from './Registration/Registration'
import Article from './Article/Article'
import RedactorArticle from './RedactorArticle/RedactorArticle'
import UserSettings from './UserSettings/UserSettings'
import UserDelete from './UserSettings/UserDelete'
import UserChangePass from './UserSettings/UserChangePass'
import Content from './Content/Content'
import AddContent from './AddContent/AddContent'

interface Section {

}

const Section:React.FC<Section> = () => {
    return(
        <React.Fragment>
            <Switch>
                <Route path="/" exact component={Content} />
                <Route path="/registration" exact component={Registration} /> 
                <Route path="/add" exact component={AddContent} /> 
                <Route path="/article" exact component={Article} />
                <Route path="/redactor" exact component={RedactorArticle} />
                <Route path="/settings" exact component={UserSettings} />
                <Route path="/deleteuser" exact component={UserDelete} />
                <Route path="/changepassword" exact component={UserChangePass} />
            </Switch>    
        </React.Fragment>
        
    )
}

export default Section