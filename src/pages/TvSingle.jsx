import { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Context } from '../states/GlobalContext';
import useFetch from '../hooks/UseFetch';

const TvSingle = () => {
  const { id } = useParams();
  const {
    baseUrl,
    clearHtml,
    addFavourites,
    favourites,
    setFavourites,
    getFavourites,
    removeFromFavourites,
  } = useContext(Context);
  const url = baseUrl + id;

  const { data, loading, error } = useFetch(url);

  const { data: episodes } = useFetch(url + '/episodes');

  let episodeNo = episodes.length;

  if (loading || data.image === undefined) return <h2>Loading...</h2>;
  if (error) return <h1>{error}</h1>;

  return (
    <div className="tv-single">
      <div className="b-img">
        <img src={data.image.original} alt="background" />
      </div>
      <header className="header-single">
        <div className="container">
          <div className="info-cover"></div>
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
      <section>
        <div className="container container-single">
          <div className="img-container">
            <img src={data.image.medium} alt={data.name} />
          </div>
          <div className="main-info">
            <h1 className="title">{data.name}</h1>
            {/* favourites button */}
            {favourites.find((show) => show.id === data.id) ? (
              <button
                className="remove-btn"
                onClick={() => removeFromFavourites(setFavourites, data.id)}
              >
                Remove from Favourites
              </button>
            ) : (
              <button
                className="fav-btn"
                onClick={() => {
                  addFavourites(data.id, data);
                  getFavourites(data.id, setFavourites);
                }}
              >
                Add to Favourites
              </button>
            )}
            <div className="summary">
              {data.summary === null ? <p>N/A</p> : clearHtml(data.summary)}
            </div>
          </div>
          <div className="side-info">
            <div className="genres">
              <hr></hr>
              <p>
                Genres:
                {data.genres.map((genre, index) => {
                  if (index > 2) {
                    return;
                  }
                  return <span key={index}>{genre}</span>;
                })}
              </p>

              <hr></hr>
            </div>
            <div className="details">
              <p className="language">Language: {data.language}</p>
              <p className="premiered">Premiered: {data.premiered}</p>
              <p className="status">Status: {data.status}</p>
              <p className="episodes">Number of Episodes: {episodeNo}</p>
            </div>
          </div>
        </div>
      </section>
      <footer></footer>
    </div>
  );
};

export default TvSingle;
