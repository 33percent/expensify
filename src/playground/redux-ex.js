import {createStore, combineReducers} from "redux";

const demostate = {
    expenses:[{
        id:"myone",
        description:"January Rent",
        note:"My final payment",
        amount:54500,
        createdAt:0
    }],
    filter:{
        text:"rent",
        sortBy:"amount",
        startDate:undefined,
        endDate:undefined
    }
};

console.log(demostate)