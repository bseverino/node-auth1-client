import React from 'react';
import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({component: Component, auth, ...rest}) => {
    const loggedIn = useSelector(state => state.loggedIn)
    return (
        <Route
            {...rest}
            render={props => {
                if (loggedIn) {
                    return <Component {...props} />
                } else {
                    return <Redirect to='/' />
                }
            }
        }/>
    )
}

export default PrivateRoute