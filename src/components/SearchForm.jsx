import { useContext } from "react";
import { Context } from "../states/GlobalContext";
const SearchForm = () => {
  const { searchQ, setSearchQ, setQuerry, querry, error } = useContext(Context);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setQuerry(searchQ);
      }}
    >
      <h3>Search Tv Shows</h3>
      <input
        type="text"
        defaultValue={searchQ}
        onChange={(e) => setSearchQ(e.target.value)}
      />
      {error && <h3>{error}</h3>}
      {querry === "" && <h3>Please input tv shows name</h3>}
    </form>
  );
};

export default SearchForm;
