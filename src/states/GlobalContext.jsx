import { createContext, useState } from 'react';
import useFetch from '../hooks/UseFetch';
import clearHtml from '../utils/clearHtml';
import removeFromFavourites from '../utils/removeFromFavourites';
import addFavourites from '../utils/addFavourites';
import getFavourites from '../utils/getFavourites';
import PropTypes from 'prop-types';

export const Context = createContext(); // import {Context}, then useContext(Context)

const GlobalContext = ({ children }) => {
  GlobalContext.propTypes = {
    children: PropTypes.object,
  };

  const sUrl = 'https://api.tvmaze.com/search/shows?q=';
  const baseUrl = 'https://api.tvmaze.com/shows/';

  const [searchQ, setSearchQ] = useState('');
  const [querry, setQuerry] = useState('Attack on Titan');
  const [favourites, setFavourites] = useState([]);

  const url = sUrl + querry;
  const { data, loading, error } = useFetch(url);

  //Remove HTLM elements from a string

  // Get favourite shows and store them in local storage

  // Remove show from favourites and local storage

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
    addFavourites,
    getFavourites,
    removeFromFavourites,
  }; // store the values that need to bee passed down to other components
  return <Context.Provider value={{ ...values }}>{children}</Context.Provider>;
};

export default GlobalContext; // wrap the whole app with <GlobalContext> <GlobalContext />
