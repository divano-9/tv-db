import { useContext } from 'react';
import { Context } from '../states/GlobalContext';
import { Link } from 'react-router-dom';
import Graph from '../components/Graph';

const Favourites = () => {
  const { favourites } = useContext(Context);

  return (
    <>
      <header className="header-favourites">
        <div className="container">
          <div className="btn-container">
            <button className="back-btn">
              <Link to="/">Back to Tv Shows</Link>
            </button>
          </div>
        </div>
      </header>
      <section className="tv-shows">
        <div className="container">
          {favourites.map((show) => {
            return (
              <article className="tv-show" key={show.id}>
                <Link to={`/shows/${show.id}`}>
                  <div className="img-container">
                    <div className="cover"></div>
                    <img src={show.image.medium} alt="img" />
                  </div>

                  <div className="info">
                    <h1>{show.name}</h1>
                    <div className="genres">
                      {show.genres.map((genre, index) => {
                        if (index > 2) return;
                        return <span key={index}>{genre}</span>;
                      })}
                    </div>
                    <p className="rating">
                      rating:{' '}
                      {show.rating.average ? show.rating.average : 'N/A'}
                    </p>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>
        <Graph />
      </section>
    </>
  );
};

export default Favourites;
