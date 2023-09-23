import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className={props.class}>
      <div className="container">
        <div className="btn-container">
          <button className="back-btn">
            <Link to="/">Back to Tv Shows</Link>
          </button>
          <button className="to-fav">
            <Link to="/shows/favourites">Go to Favourites</Link>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
