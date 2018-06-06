import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Route,Switch,Link,NavLink } from 'react-router-dom';
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
const notfound = () => (
    <div>
    <Link to="/">404. Not found.</Link>
    </div>
);

const Header = () => (
<header>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
    <NavLink to="/create" activeClassName="is-active">Create</NavLink>
    <NavLink to="/edit" activeClassName="is-active">Edit</NavLink>
    <NavLink to="/help" activeClassName="is-active">Help</NavLink>
</header>
);

const routes = (
    <BrowserRouter>
    <div>
        <Route component={Header} />
    <Switch>
    <Route path="/" component={expensehome} exact={true}/>
    <Route path="/create" component={addexpense} />
    <Route path="/edit" component={editexpense} />
    <Route path="/help" component={helpexpense} />
    <Route component={notfound} />
    </Switch>
    </div>
    </BrowserRouter>
);
ReactDOM.render(routes, document.getElementById('app'));