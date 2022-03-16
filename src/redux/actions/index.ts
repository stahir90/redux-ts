import { ActionTypes } from "../action-types";


export type Deposit = {
    type:ActionTypes.Deposit,
    payload: number,
}

export type Withdrawl = {
    type:ActionTypes.Withdrawl,
    payload: number,
}

export type Bankruptcy = {
    type:ActionTypes.Bankruptcy,
    payload: number
}

export type Action = Deposit | Withdrawl | Bankruptcy;