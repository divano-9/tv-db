import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { Context } from "../states/GlobalContext";
import axios from "axios";
import useFetch from "../hooks/UseFetch";

const TvSingle = () => {
  const { id } = useParams();
  const { baseUrl } = useContext(Context);
  const url = baseUrl + id;

  const { data, loading, error } = useFetch(url);

  if (loading) return <h2>Loading...</h2>;

  return <h2>{data.name}</h2>;
};

export default TvSingle;
