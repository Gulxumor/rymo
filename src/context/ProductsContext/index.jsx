import { useContext } from "react";
import { createContext } from "react";

const Context = createContext();
export const ProductsContext = () => useContext(Context);

function ProductsContextProvider({ children }) {
  return (
    <Context.Provider value={{ name: "name" }}>{children}</Context.Provider>
  );
}

export default ProductsContextProvider;
