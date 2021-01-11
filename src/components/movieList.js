import styled from "styled-components";
import MovieCard from "./movieCard";
import MyContext from "../MyContext";
import { useContext } from "react";

const Container = styled.div`
  grid-column: span 2 / auto;
  background-color: ${({ theme }) => theme.secondaryColor};
  border-radius: 10px;
  padding: 15px;

  @media (max-width: 900px) {
    grid-column: span 3 / auto;
  }
`;

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 30px;
  grid-column-gap: 20px;

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ResultsText = styled.p`
  grid-column: span 3 / auto;

  @media (max-width: 600px) {
    grid-column: span 2 / auto;
  }
`;

const Banner = styled.p`
  font-size: 20px;
  text-align: center;
  margin-bottom: 10px;
  font-weight: bold;
  color: #00d25a;
`;

const MovieList = ({ movieData, title }) => {
  const { nominations } = useContext(MyContext);

  const bannerText = nominations.length === 5 && (
    <Banner>You have selected 5 nominations</Banner>
  );

  return (
    <Container>
      {bannerText}
      <ListContainer>
        <ResultsText>Results for: {title}</ResultsText>
        {movieData &&
          movieData.map((data) => {
            const { imdbID } = data;
            return <MovieCard key={imdbID} text="Nominate" data={data} />;
          })}
      </ListContainer>
    </Container>
  );
};

export default MovieList;
