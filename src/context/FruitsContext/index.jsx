import React, { createContext, useContext } from "react";
import { useReducer } from "react";
import { INITIAL_STATE, reducer } from "./reducer";

const Context = createContext();
export const FruitsContext = () => useContext(Context);

const FruitsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer,INITIAL_STATE );

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export default FruitsContextProvider;
