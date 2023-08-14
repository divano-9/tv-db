import { createContext } from "react";

export const Context = createContext(); // import {Context}, then useContext(Context)

const values = {}; // store the values that need to bee passed down to other components

const GlobalContext = ({ children }) => {
  return <Context.Provider value={values}>{children}</Context.Provider>;
};

export default GlobalContext; // wrap the whole app with <GlobalContext> <GlobalContext />
