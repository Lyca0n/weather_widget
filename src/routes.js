import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import { createBrowserHistory } from "history";
import Nav from './modules/common/Nav';
import HomePage from './modules/home/HomePage';
import NotFoundPage from './modules/common/NotFoundPage';


export const history = createBrowserHistory();

const AppRouter= ()=>(
    <Router history={history}>
        <div className="page-container" >
            <Nav/>
            <Switch>
                <Route exact path="/" component={HomePage} />                
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;