import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/style.scss';
import AppRouter from './routers/AppRouter';
import configurewStore from './store/configureStore';

import  { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

const store = configurewStore();
console.log(store.getState());

ReactDOM.render(<AppRouter />, document.getElementById('app'));