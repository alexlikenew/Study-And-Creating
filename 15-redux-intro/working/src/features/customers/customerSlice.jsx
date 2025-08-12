import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    fullName: '',
    nationID: '',
    createdAt: '',
}

const customerSlice = createSlice({
    name: 'customer',
    initialState: initialState,
    reducers: {
        createCustomer: {
            prepare(fullName, nationID) {
                return {payload: {fullName, nationID, createdAt: new Date().toISOString()}}
            },
            reducer(state, action) {
                state.fullName = action.payload.fullName ,
                    state.nationID = action.payload.nationID ,
                    state.createdAt = action.payload.createdAt
            }
        },
        updateName(state, action) {
            state.fullName = action.payload
        }
    }
})

// export default function customerReducer(state = initialStateCustomer, action) {
//     switch (action.type) {
//         case 'customer/createCustomer':
//             return {
//                 ...state,
//                 fullName: action.payload.fullName,
//                 nationalID: action.payload.nationalID,
//                 createdAt: action.payload.createdAt
//             }
//         case 'customer/updateName':
//             return ({
//                 ...state, fullName: action.payload.fullName
//             })
//
//         default:
//             return state
//     }
// }

// export function createCustomer(fullName, nationalID) {
//     return ({type: 'customer/createCustomer', payload: {fullName, nationalID, createdAt: new Date().toISOString()}})
// }
//
// export function updateName(fullName) {
//     return ({type: 'account/updateName', payload: fullName})
// }

export const {createCustomer, updateName} = customerSlice.actions;

export default customerSlice.reducer;