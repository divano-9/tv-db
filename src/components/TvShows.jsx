import { useContext, useState, useEffect } from "react";
import { Context } from "../states/GlobalContext";

const TvShows = () => {
  const { loading, data } = useContext(Context);
  console.log(data);

  if (loading) return <h2>Loading...</h2>;

  return (
    <>
      {data.map((single) => {
        const { id, name } = single.show;

        return <h3 key={id}>{name}</h3>;
      })}
    </>
  );
};

export default TvShows;
