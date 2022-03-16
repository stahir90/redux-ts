import { Dispatch } from "redux";
import { ActionTypes } from "../action-types";
import {Action} from '../actions'

const depositMoney = (amount: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionTypes.Deposit,
      payload: amount,
    });
  };
};

const withdrawlMoney = (amount: number) => {
    return (dispatch: Dispatch<Action>) => {
      dispatch({
        type: ActionTypes.Withdrawl,
        payload: amount,
      });
    };
  };

  const bankruptcy = () => {
    return (dispatch: Dispatch<Action>) => {
      dispatch({
        type: ActionTypes.Bankruptcy,
        payload: 0
      });
    };
  };

export { depositMoney, withdrawlMoney, bankruptcy };
