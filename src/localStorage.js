import { useEffect, useState } from "react";

export const useLocalStorage = () => {
  const [data, setData] = useState([]);

  const handleClick = (action, movieData) => {
    if (action === "add") {
      setData((data) => [...data, movieData]);
    } else {
      const newArray = data.filter((data) => {
        const { imdbID } = data;
        return !(imdbID === movieData);
      });

      setData(newArray);
    }
  };

  useEffect(() => {
    const nominations = JSON.parse(localStorage.getItem("nominations"));
    nominations && setData(nominations);
  }, []);

  return [data, handleClick];
};
