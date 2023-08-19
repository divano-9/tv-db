import { useContext } from "react";
import { Context } from "../states/GlobalContext";
import { Link } from "react-router-dom";

const TvShows = () => {
  const { loading, data } = useContext(Context);
  console.log(data);

  if (loading) return <h2>Loading...</h2>;

  return (
    <section className="tv-shows">
      {data.map((single) => {
        const { id, name, image, genres, rating } = single.show;

        return (
          <article className="tv-show" key={id}>
            <Link to={`/shows/${id}`}>
              <div className="img-container">
                <div className="cover"></div>
                <img src={image.medium} alt="img" />
              </div>

              <div className="info">
                <h1>{name}</h1>
                <p className="genres">
                  genres: <br />
                  {genres.toString()}
                </p>
                <p className="rating">
                  rating: {rating.average ? rating.average : "N/A"}
                </p>
              </div>
            </Link>
          </article>
        );
      })}
    </section>
  );
};

export default TvShows;
