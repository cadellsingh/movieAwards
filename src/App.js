import { useState, useEffect } from "react";
import { GlobalStyles } from "./globalStyling&Themes/globalStyles";
import styled, { ThemeProvider } from "styled-components";
import SearchForm from "./components/searchForm";
import MovieList from "./components/movieList";
import Nominations from "./components/nominations";
import axios from "axios";
import Header from "./components/header";
import MyContext from "./MyContext";
import { useDarkMode } from "./globalStyling&Themes/darkMode";
import { darkTheme, lightTheme } from "./globalStyling&Themes/themes";
import { useLocalStorage } from "./localStorage";

const MainContainer = styled.div`
  width: 75%;
  margin: 30px auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;

  @media (max-width: 1100px) {
    width: 90%;
  }
`;

const App = () => {
  const [title, setTitle] = useState("");
  const [movieData, setMovieData] = useState([]);
  const [nominations, setNominations] = useLocalStorage();
  const [theme, setTheme] = useDarkMode();
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    localStorage.setItem("nominations", JSON.stringify(nominations));
  }, [nominations]);

  useEffect(() => {
    getData();
  }, [title, pageNumber]);

  const getData = () => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const apiURL = `http://www.omdbapi.com/?apikey=${apiKey}&s=${title}&type=movie&page=${pageNumber}`;

    const fetchData = async () => {
      const result = await axios(apiURL);
      const { data } = result;
      const { Search: search } = data;

      if (data.length > 0) {
        let newData = [...movieData, search];
        setMovieData(newData);
      } else {
        setMovieData(search);
      }
    };

    fetchData();
  };

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <MainContainer>
          <Header theme={theme} themeToggler={themeToggler} />
          <SearchForm setTitle={setTitle} />

          <MyContext.Provider
            value={{
              nominations: nominations,
              setNominations: setNominations,
              setPageNumber: setPageNumber,
              pageNumber: pageNumber,
            }}
          >
            <MovieList movieData={movieData} title={title} />
            <Nominations />
          </MyContext.Provider>
        </MainContainer>
      </>
    </ThemeProvider>
  );
};

export default App;
