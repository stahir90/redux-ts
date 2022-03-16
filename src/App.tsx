import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./redux";
import { State } from "./redux/reducers";

function App() {
  const dispatch = useDispatch();
  const { depositMoney, withdrawlMoney, bankruptcy } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const state = useSelector((state: State) => state.bank);

  return (
    <div>
      <h1>{state.initialSum}</h1>
      <button onClick={() => depositMoney(500)}>Deposit</button>
      <button onClick={() => withdrawlMoney(500)}>Withdrawl</button>
      <button onClick={() => bankruptcy()}>Bankrupt</button>
    </div>
  );
}

export default App;
