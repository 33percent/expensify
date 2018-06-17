import {
    createStore,
    combineReducers
} from "redux";

import uuidv4 from 'uuid/v1';
import crypto from 'crypto';


const addExpense = ({
    description = "",
    note = '',
    amount = 0,
    createdAt = 0
} = {}) => ({
    type: "ADD_EXPENSE",
    expense: {
        id: crypto.randomBytes(16).toString("hex"),
        description,
        note,
        amount,
        createdAt
    }
});

const removeExpense = ({
    id
} = {}) => ({
    type: "REMOVE_EXPENSE",
    id
})

const demostate = {
    expenses: [{
        id: "myone",
        description: "January Rent",
        note: "My final payment",
        amount: 54500,
        createdAt: 0
    }],
    filter: {
        text: "rent",
        sortBy: "amount",
        startDate: undefined,
        endDate: undefined
    }
};


//expenses reducer

const expensesReducerDefault = []

const expensesReducer = (state = expensesReducerDefault, action) => {
    switch (action.type) {
        case "ADD_EXPENSE":
            return [
                ...state,
                action.expense
            ];

        case "REMOVE_EXPENSE":
            return state.filter(({
                id
            }) => id !== action.id);
        default:
            return state;
    }
};

//Filter reducer;

const filterReducerDefault = {
    text: "",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined
}
const filterReducer = (state = filterReducerDefault, action) => {
    switch (action.type) {
        default: return state;
    }
}

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filter: filterReducer
    })
);

store.subscribe(() => {
    console.log(store.getState());
})

const expenseA = store.dispatch(addExpense({
    description: "My new",
    amount: 100
}));

const expenseB = store.dispatch(addExpense({
    description: "Coffee",
    amount: 500
}));

store.dispatch(removeExpense({
    id: expenseA.expense.id
}));

console.log(store.getState())