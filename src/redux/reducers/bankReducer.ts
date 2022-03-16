import { Action } from "../actions";
import { ActionTypes } from "../action-types";

type BankProps = {
  initialSum: number;
};

const initialState: BankProps = {
  initialSum: 0,
};

const reducer = (
  state: BankProps = initialState,
  action: Action
): BankProps => {
  switch (action.type) {
    case ActionTypes.Deposit:
      return {
        ...state,
        initialSum: state.initialSum + action.payload,
      };

    case ActionTypes.Withdrawl:
      return {
        ...state,
        initialSum: state.initialSum - action.payload,
      };

    case ActionTypes.Bankruptcy:
      return {
        ...state,
        initialSum: 0,
      };

    default:
      return {
        ...state,
        initialSum: 0,
      };
  }
};

export default reducer;
