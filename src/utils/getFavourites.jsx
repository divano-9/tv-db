const getFavourites = (id, state) => {
  let storageItem = localStorage.getItem(id);
  state((current) => [...current, JSON.parse(storageItem)]);
};

export default getFavourites;
