import {createStore} from 'redux';

const store = createStore((state = {count:0},action)=> {
switch(action.type) {
    case 'INCREMENT':
    const incrementby = (typeof action.incrementBy ==='number' ? action.incrementBy : 1);
    return {
        count:state.count+incrementby
    }
    case 'DECREMENT':
    const decrementby = (typeof action.decrementBy === 'number' ? action.decrementBy : 1);
    return {
        count:state.count-decrementby
    }
    case 'RESET':
    return {
        count:0
    }
    default: 
    return state;
}
});

const subscribbe = store.subscribe(()=> {
    console.log(store.getState());
});

store.dispatch({
    type:'INCREMENT',
    incrementBy:5
});

store.dispatch({
    type:'DECREMENT',
    decrementBy : 5
});

store.dispatch({
    type:'RESET'
})
