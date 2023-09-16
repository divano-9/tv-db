const addFavourites = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export default addFavourites;
