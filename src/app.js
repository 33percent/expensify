import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Route } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/style.scss';

const expensehome = () => (
<div>
    Home page
    </div>
);

const addexpense = () => (
    <div>
    Add neew expense
    </div>
);

const editexpense = () => (
    <div>
        Edit your expense
    </div>
);

const helpexpense = () => (
    <div>
    Help
    </div>
);

const routes = (
    <BrowserRouter>
    <div>
    <Route path="/" component={expensehome} exact={true}/>
    <Route path="/create" component={addexpense} />
    <Route path="/edit" component={editexpense} />
    <Route path="/help" component={helpexpense} />
    </div>
    </BrowserRouter>
);
ReactDOM.render(routes, document.getElementById('app'));