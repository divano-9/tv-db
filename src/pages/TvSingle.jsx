import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { Context } from "../states/GlobalContext";
import axios from "axios";
import useFetch from "../hooks/UseFetch";

const TvSingle = () => {
  const { id } = useParams();
  const { baseUrl, clearHtml } = useContext(Context);
  const url = baseUrl + id;

  const { data, loading, error } = useFetch(url);

  if (loading || data.image === undefined) return <h2>Loading...</h2>;
  console.log(data.genres);
  return (
    <div className="wrapper">
      <section className="tv-single">
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
      </section>
    </div>
  );
};

export default TvSingle;
