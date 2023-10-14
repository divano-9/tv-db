import { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Context } from '../states/GlobalContext';
import useFetch from '../hooks/UseFetch';
import Header from '../components/Header';

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

  const { data: cast } = useFetch(url + '/cast');
  console.log('cast: ', cast);

  let episodeNo = episodes.length;

  if (loading || data.image === undefined) return <h2>Loading...</h2>;
  if (error) return <h1>{error}</h1>;

  return (
    <>
      <Header class="header-single" />
      <div className="tv-single">
        <div className="b-img">
          <img src={data.image.original} alt="background" />
        </div>
        <div className="container container-single">
          <section>
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
              {/* favourites button end */}
              <div className="summary">
                {data.summary === null ? <p>N/A</p> : clearHtml(data.summary)}
              </div>
            </div>
            <div className="side-info">
              <div className="info-cover"></div>
              <div className="genres">
                <p>Genres:</p>
                <ul>
                  {data.genres.map((genre, index) => {
                    if (index > 2) {
                      return;
                    }
                    return <li key={index}>{genre}</li>;
                  })}
                </ul>
              </div>
              <div className="details">
                <p className="language">Language: {data.language}</p>
                <p className="premiered">Premiered: {data.premiered}</p>
                <p className="status">Status: {data.status}</p>
                <p className="episodes">Number of Episodes: {episodeNo}</p>
              </div>
              <div className="cast">
                <p className="cast-title">Cast</p>
                <ul>
                  {cast.map((single, index) => {
                    const { name, url, image, id } = single.person;
                    if (index > 3) return;
                    return (
                      <li key={id}>
                        <a href={url}>
                          <p>{name}</p>
                          <div className="icon-container">
                            {image === null ? (
                              <p>No image available</p>
                            ) : (
                              <img src={image.medium} alt="cast icon" />
                            )}
                          </div>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </section>
        </div>
        <footer></footer>
      </div>
    </>
  );
};

export default TvSingle;
