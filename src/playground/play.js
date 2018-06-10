import {createStore} from 'redux';

const store = createStore((state = {count:0})=> {
    state.count = state.count+1;
    return state; 
});

console.log(store.getState())