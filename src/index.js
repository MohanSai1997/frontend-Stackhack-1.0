import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {UserContextProvider} from "./components/contexts/user.status.context";
import {Login} from "./components/Login/Login";
import {ProtectedRoute} from "./PrivateRoutes/PrivateRoute";
import {AppView} from "./components/AppView/AppView";

ReactDOM.render(
    <BrowserRouter>
        <UserContextProvider>
            <ProtectedRoute
                path="/"
                exact={true}
                component= {Login}
            />
            <ProtectedRoute
                path="/app"
                exact={true}
                component={AppView}
            />
        </UserContextProvider>
    </BrowserRouter>,
    document.getElementById('root')
);
