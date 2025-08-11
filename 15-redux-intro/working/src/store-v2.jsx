import {applyMiddleware, combineReducers, createStore} from "redux";
import accountReducer from "./features/account/accountSlice.jsx";
import customerReducer from "./features/customers/customerSlice.jsx";

import {configureStore} from "@reduxjs/toolkit";

import {thunk} from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

const rootReducer = combineReducers({
    account: accountReducer, customer: customerReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store;