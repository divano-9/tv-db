import { useContext } from 'react';
import { Context } from '../states/GlobalContext';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const TvShows = () => {
  const { loading, data, favourites, querry } = useContext(Context);

  if (loading) return <h2>Loading...</h2>;
  if (querry === '') {
    return <h1 className="no-shows">Please input tv shows name</h1>;
  }
  if (data.length === 0)
    return <h1 className="no-shows">No such tv shows, try something else</h1>;

  return (
    <section className="tv-shows">
      <div className="container">
        {data.map((single) => {
          const { id, name, image, genres, rating } = single.show;
          const find = favourites.find((item) => item.id === id);
          if (image === null) {
            return;
          }
          return (
            <article className="tv-show" key={id}>
              <Link to={`/shows/${id}`}>
                <div className="img-container">
                  {find ? <FaStar className="star" /> : null}
                  <div className="cover"></div>
                  <img src={image.medium} alt="img" />
                </div>

                <div className="info">
                  <h1>{name}</h1>
                  <div className="genres">
                    {genres.map((genre, index) => {
                      if (index > 2) return;
                      return <span key={index}>{genre}</span>;
                    })}
                  </div>
                  <p className="rating">
                    rating: {rating.average ? rating.average : 'N/A'}
                  </p>
                </div>
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default TvShows;
