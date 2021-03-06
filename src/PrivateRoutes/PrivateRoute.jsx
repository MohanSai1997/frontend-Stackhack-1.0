import React, { useContext } from 'react'
import { Route , Redirect } from 'react-router-dom';

import { UserContext } from "../components/contexts/user.status.context"


export const ProtectedRoute = ({ component: Component, ...rest}) => {
    const { user } = useContext(UserContext)

    if (rest.path === "/"){
        return (
            <Route {...rest} render={props =>
                user.userSignInStatus ? (
                    <Redirect to={"/app"} />
                ) : (
                    <Component {...props} />
                )
            }
            />
        )
    } else {
        return(
            <Route {...rest} render={props =>
                user.userSignInStatus ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={"/"} />
                )
            }
            />
        )
    }
}
