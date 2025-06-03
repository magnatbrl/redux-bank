import { DEPOSIT, WITHDRAW } from "../action/accountActions";

export const accountReducer = (state, action) => {
    switch (action.type) {
        case DEPOSIT:
            return { ...state, balance: state.balance + action.payload }
        case WITHDRAW:
            return { ...state, balance: state.balance - action.payload < 0 ? state.balance : state.balance - action.payload }
        default:
            return state
    }
}