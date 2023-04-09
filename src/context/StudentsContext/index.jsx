import { useContext, useState } from "react";
import { createContext } from "react";

const Context = createContext();
export const StudentsContext = () => useContext(Context);

function StudentsContextProvider({ children }) {
  const [student, setStudent] = useState({ firstName: "John" });
  return (
    <Context.Provider value={{ student, setStudent }}>
      {children}
    </Context.Provider>
  );
}

export default StudentsContextProvider;
