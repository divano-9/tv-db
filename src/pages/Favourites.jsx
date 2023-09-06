import { useContext } from "react";
import { Context } from "../states/GlobalContext";
import { Link } from "react-router-dom";
import useFetch from "../hooks/UseFetch";

const Favourites = () => {
  const { favourites } = useContext(Context);
  console.log(favourites);
  console.log(localStorage);
  return (
    <>
      <header className="header-favourites">
        <div className="container">
          <button className="back-btn">
            <Link to="/">Back to Tv Shows</Link>
          </button>
        </div>
      </header>
      <section className="tv-shows">
        <div className="container">
          {favourites.map((single) => {
            const { data, loading } = useFetch(single, favourites);

            if (loading || data.image === undefined) return <h2>Loading...</h2>;

            return (
              <article className="tv-show" key={data.id}>
                <Link to={`/shows/${data.id}`}>
                  <div className="img-container">
                    <div className="cover"></div>
                    <img src={data.image.medium} alt="img" />
                  </div>

                  <div className="info">
                    <h1>{data.name}</h1>
                    <div className="genres">
                      {data.genres.map((genre, index) => {
                        if (index > 2) return;
                        return <span key={index}>{genre}</span>;
                      })}
                    </div>
                    <p className="rating">
                      rating:{" "}
                      {data.rating.average ? data.rating.average : "N/A"}
                    </p>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Favourites;
