import { createContext, useState, useEffect } from "react";
import useFetch from "../hooks/UseFetch";
import axios from "axios";

export const Context = createContext(); // import {Context}, then useContext(Context)

const GlobalContext = ({ children }) => {
  const sUrl = "https://api.tvmaze.com/search/shows?q=";

  const [searchQ, setSearchQ] = useState("Attack on Titan");

  const url = sUrl + searchQ;
  const { data, loading, error } = useFetch(url);

  const values = { data, loading }; // store the values that need to bee passed down to other components
  return <Context.Provider value={{ ...values }}>{children}</Context.Provider>;
};

export default GlobalContext; // wrap the whole app with <GlobalContext> <GlobalContext />
