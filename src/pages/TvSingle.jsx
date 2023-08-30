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
    <>
      <header className="header-single">
        <div className="container">
          <button className="back-btn">
            <Link to="/">Back to Tv Shows</Link>
          </button>
          {favourites.includes(baseUrl + data.id) ? (
            <button
              className="remove-btn"
              onClick={() => removeFromFavourites(data.id)}
            >
              remove from favourites
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
      <section className="tv-single">
        <div className="container container-single">
          <div className="img-container">
            <img src={data.image.medium} alt={data.name} />
          </div>
          <div className="info">
            <h1>{data.name}</h1>
            <div className="genres">
              {data.genres.map((genre, index) => {
                return <span key={index}>{genre}</span>;
              })}
            </div>
            <div className="summary">{clearHtml(data.summary)}</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TvSingle;
