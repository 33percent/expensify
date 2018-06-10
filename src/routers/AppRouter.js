import React from 'react';
import { BrowserRouter,Route,Switch,Link,NavLink } from 'react-router-dom';


import expensehome from '../components/expense';
import addexpense from '../components/addexpense';
import editexpense from '../components/editexpense';
import help from '../components/help';
import notfound from '../components/notfound';
import Header from '../components/Header';

    
    const AppRouter = () => (
        <BrowserRouter>
        <div>
            <Route component={Header} />
        <Switch>
        <Route path="/" component={expensehome} exact={true}/>
        <Route path="/create" component={addexpense} />
        <Route path="/edit/:id" component={editexpense} />
        <Route path="/help" component={help} />
        <Route component={notfound} />
        </Switch>
        </div>
        </BrowserRouter>
    );

    export default AppRouter;