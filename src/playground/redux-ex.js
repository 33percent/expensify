import {
    createStore,
    combineReducers
} from "redux";

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
        default: return state;
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

console.log(store.getState());