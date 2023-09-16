const removeFromFavourites = (state, id) => {
  localStorage.removeItem(id);
  state((current) =>
    current.filter((show) => {
      return show.id !== id;
    }),
  );
};

export default removeFromFavourites;
