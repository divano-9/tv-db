import { useContext } from 'react';
import { Context } from '../states/GlobalContext';
import { Link } from 'react-router-dom';
import Graph from '../components/Graph';
import Header from '../components/Header';
import { FaTimes } from 'react-icons/fa';

const Favourites = () => {
  const { favourites, removeFromFavourites, setFavourites } =
    useContext(Context);
  console.log(favourites);

  return (
    <>
      <Header class="header-favourites" />
      <section className="tv-shows favourites">
        <div className="container">
          {favourites.length === 0 ? (
            <h1 className="no-fav">There are no tv shows in your favourites</h1>
          ) : (
            favourites.map((show) => {
              return (
                <article className="tv-show" key={show.id}>
                  <Link to={`/shows/${show.id}`}>
                    <div className="img-container">
                      <FaTimes
                        className=" remove"
                        onClick={(e) => {
                          e.preventDefault();
                          removeFromFavourites(setFavourites, show.id);
                        }}
                      />
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
            })
          )}
        </div>
        <Graph />
      </section>
    </>
  );
};

export default Favourites;
