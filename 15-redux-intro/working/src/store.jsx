import {combineReducers, createStore} from "redux";
import accountReducer from "./features/account/accountSlice.jsx";
import customerReducer from "./features/customers/customerSlice.jsx";

const rootReducer = combineReducers({
    account: accountReducer, customer: customerReducer
})

const store = createStore(rootReducer)

export default store;