import { useContext } from 'react';
import { Context } from '../states/GlobalContext';
import { Link } from 'react-router-dom';
const SearchForm = () => {
  const { searchQ, setSearchQ, setQuerry, querry, error } = useContext(Context);
  return (
    <header className="header-search">
      <div className="container">
        <form
          className="search"
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

          <button className="fav-btn">
            <Link to="/shows/favourites">Go to Favourites</Link>
          </button>
        </form>
      </div>
    </header>
  );
};

export default SearchForm;
