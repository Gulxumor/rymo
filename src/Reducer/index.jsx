import React, { useReducer } from "react";
import { ACTION_TYPES, INITIAL_STATE, reducer } from "./reducer";

const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  console.log(state);
  return (
    <div>
      <h4>Reducer, {state.count}</h4>
      <button
        onClick={() => dispatch({ type: ACTION_TYPES.INCREMENT_QUANTITY })}
      >
        +
      </button>
      <button
        onClick={() => dispatch({ type: ACTION_TYPES.DECREMENT_QUANTITY })}
      >
        -
      </button>
    </div>
  );
};

export default Reducer;
