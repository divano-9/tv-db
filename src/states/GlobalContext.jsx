import { createContext, useState, useEffect } from "react";
import useFetch from "../hooks/UseFetch";
import axios from "axios";

export const Context = createContext(); // import {Context}, then useContext(Context)

const GlobalContext = ({ children }) => {
  const sUrl = "https://api.tvmaze.com/search/shows?q=";
  const baseUrl = "https://api.tvmaze.com/shows/";

  const [searchQ, setSearchQ] = useState("");
  const [querry, setQuerry] = useState("Attack on Titan");

  const url = sUrl + querry;
  const { data, loading, error } = useFetch(url, querry);

  const clearHtml = (text) => {
    const clear = text
      .replace("<p>", "")
      .replace("</p>", "")
      .replace("<b>", "")
      .replace("</b>", "");
    return clear;
  };

  const values = {
    data,
    loading,
    error,
    searchQ,
    setSearchQ,
    querry,
    setQuerry,
    baseUrl,
    clearHtml,
  }; // store the values that need to bee passed down to other components
  return <Context.Provider value={{ ...values }}>{children}</Context.Provider>;
};

export default GlobalContext; // wrap the whole app with <GlobalContext> <GlobalContext />
