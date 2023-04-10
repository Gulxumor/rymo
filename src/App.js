import { FruitsContext } from './context/FruitsContext';
import { ACTION_TYPES } from './context/FruitsContext/reducer';
function App() {

  const { state, dispatch } = FruitsContext()
  console.log(state);
  return (
    <>
      <h1>Count, {state.count}</h1>
      <button onClick={() => dispatch({ type: ACTION_TYPES.INCREMENT_QUANTITY })}>+</button>
      <button onClick={() => dispatch({ type: ACTION_TYPES.DECREMENT_QUANTITY })}>-</button>

    </>

  );
}

export default App;