import { createContext, useState, useEffect } from "react";
import useFetch from "../hooks/UseFetch";
import axios from "axios";

export const Context = createContext(); // import {Context}, then useContext(Context)

const GlobalContext = ({ children }) => {
  const sUrl = "https://api.tvmaze.com/search/shows?q=";
  const baseUrl = "https://api.tvmaze.com/shows/";

  const [searchQ, setSearchQ] = useState("");
  const [querry, setQuerry] = useState("Attack on Titan");
  const [favourites, setFavourites] = useState([
    baseUrl + 1,
    baseUrl + 2,
    baseUrl + 3,
  ]);

  const url = sUrl + querry;
  const { data, loading, error } = useFetch(url, querry);

  //Remove HTLM elements from a string
  const clearHtml = (text) => {
    const clear = text
      .replace("<p>", "")
      .replace("</p>", "")
      .replace("<b>", "")
      .replace("</b>", "");
    return clear;
  };

  // Get favourite shows and store them in local storage
  const getFavourites = (showId) => {
    localStorage.setItem(showId, baseUrl + showId);
    console.log(localStorage);
    setFavourites((current) => [...current, localStorage.getItem(showId)]);
  };

  // Remove show from favourites and local storage
  const removeFromFavourites = (id) => {
    localStorage.removeItem(id);
    console.log(id);
    console.log(localStorage);
    setFavourites((current) =>
      current.filter((show) => {
        return show !== baseUrl + id;
      })
    );
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
    favourites,
    setFavourites,
    getFavourites,
    removeFromFavourites,
  }; // store the values that need to bee passed down to other components
  return <Context.Provider value={{ ...values }}>{children}</Context.Provider>;
};

export default GlobalContext; // wrap the whole app with <GlobalContext> <GlobalContext />
