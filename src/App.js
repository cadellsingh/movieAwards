import { useState, useEffect } from "react";
import { GlobalStyles } from "./globalStyling&Themes/globalStyles";
import styled from "styled-components";
import SearchForm from "./components/searchForm";
import MovieList from "./components/movieList";
import Nominations from "./components/nominations";
import axios from "axios";
import Header from "./components/header";
import MyContext from "./MyContext";

const MainContainer = styled.div`
  width: 75%;
  margin: 30px auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
`;

const App = () => {
  const [title, setTitle] = useState("");
  const [movieData, setMovieData] = useState([]);
  const [nominations, setNominations] = useState([]);

  useEffect(() => {
    getData();
  }, [title]);

  const getData = () => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const apiURL = `http://www.omdbapi.com/?apikey=${apiKey}&s=${title}&type=movie`;

    const fetchData = async () => {
      const result = await axios(apiURL);
      const { data } = result;
      const { Search: search } = data;

      setMovieData(search);
    };

    fetchData();
  };

  const handleClick = (action, movieData) => {
    if (action === "add") {
      setNominations((nominations) => [...nominations, movieData]);
    } else {
      const newArray = nominations.filter((data) => {
        const { imdbID } = data;
        return !(imdbID === movieData);
      });

      setNominations(newArray);
    }
  };

  return (
    <>
      <GlobalStyles />
      <MainContainer>
        <Header />
        <SearchForm setTitle={setTitle} />

        <MyContext.Provider
          value={{ nominations: nominations, handleClick: handleClick }}
        >
          {movieData && <MovieList movieData={movieData} />}
          {/*<MovieList movieData={movieData} />*/}
          <Nominations />
        </MyContext.Provider>
      </MainContainer>
    </>
  );
};

export default App;
