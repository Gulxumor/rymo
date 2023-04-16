import { createContext, useContext, useReducer } from "react";
import { INITIAL_STATE, reducer } from "./reducer";

const ProductsContext = createContext();
export const useProductsContext = () => useContext(ProductsContext);

function ProductsContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <ProductsContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductsContextProvider;
