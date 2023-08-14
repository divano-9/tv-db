import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        setData(response.data); // if fetching is successful set data state to api's respone data
      })
      .catch((error) => {
        setError(error); // if there is an error set it in error state
      })
      .finally(() => {
        setLoading(false); // after success or error set loading to false
      });
  }, [url]); // render again when url changes

  const refetch = () => {
    // fetch api url again (on click, or other events)
    console.log("refetch!");
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { data, loading, error, refetch };
};

export default useFetch;
