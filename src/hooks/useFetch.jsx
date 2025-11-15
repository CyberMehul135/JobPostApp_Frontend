import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchData() {
    try {
      setLoading(true);
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      setError(error);
      if (error.response) {
        console.error("Backend Error:", error.response.data.error);
      } else {
        console.error("Network Error:", error.message);
      }
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, loading, error, fetchData };
};

export default useFetch;
