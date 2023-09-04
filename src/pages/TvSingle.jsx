import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { Context } from "../states/GlobalContext";
import axios from "axios";
import useFetch from "../hooks/UseFetch";

const TvSingle = () => {
  const { id } = useParams();
  const {
    baseUrl,
    clearHtml,
    getFavourites,
    favourites,
    setFavourites,
    removeFromFavourites,
  } = useContext(Context);
  const url = baseUrl + id;

  const { data, loading, error } = useFetch(url);

  if (loading || data.image === undefined) return <h2>Loading...</h2>;

  return (
    <div className="tv-single">
      <div className="b-img">
        <img src={data.image.original} alt="background" />
      </div>
      <header className="header-single">
        <div className="container">
          <div className="info-cover"></div>
          <button className="back-btn">
            <Link to="/">Back to Tv Shows</Link>
          </button>
          {favourites.includes(baseUrl + data.id) ? (
            <button
              className="remove-btn"
              onClick={() => removeFromFavourites(data.id)}
            >
              Remove from Favourites
            </button>
          ) : (
            <button
              className="fav-btn"
              onClick={() => {
                getFavourites(data.id);
              }}
            >
              Add to Favourites
            </button>
          )}
        </div>
      </header>
      <section>
        <div className="container container-single">
          <div className="img-container">
            <img src={data.image.medium} alt={data.name} />
          </div>
          <div className="main-info">
            <h1 className="title">{data.name}</h1>

            <div className="summary">
              {data.summary === null ? <p>N/A</p> : clearHtml(data.summary)}
            </div>
          </div>
          <div className="side-info">
            <div className="genres">
              {data.genres.map((genre, index) => {
                return <span key={index}>{genre}</span>;
              })}
            </div>
          </div>
        </div>
      </section>
      <footer></footer>
    </div>
  );
};

export default TvSingle;
