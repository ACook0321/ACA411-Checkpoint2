import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import cookie from 'cookie'
import Listings from './containers/Listings'
import Login from './containers/Login'
import Details from './containers/Details'
import AddListing from './containers/AddListing'

const checkAuth = () => {
    const cookies = cookie.parse(document.cookie)
    return cookies["loggedIn"] ? true : false
}

const ProtectedRoute = ({component: Component, ...rest}) => {
    return(
        <Route 
        {...rest}
        render={(props) => checkAuth()
            ? <Component {...props} />
            : <Redirect to ='/login' />
            }
        />
    )
}

const Router = () => {
    return (
        <Switch>
            <Route path="/login" component={Login} />
            <Route exact path="/" component={Listings} />
            <Route path="/listing/:id" component={Details} />
            <ProtectedRoute path="/add" component={AddListing}/>
        </Switch>
    );
};

export default Router;