import { useEffect } from "react";
import { useState } from "react";

const UseFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  return [data];
};

export default UseFetch;
