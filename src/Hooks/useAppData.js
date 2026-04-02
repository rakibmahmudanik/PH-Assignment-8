import React, { useEffect, useState } from "react";
import axios from "axios";

const useAppData = () => {
  const [appData, setAppData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      axios("../appData.json")
        .then((data) => setAppData(data.data))
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    }, 1500);
  }, []);

  return { appData, loading, error };
};

export default useAppData;
