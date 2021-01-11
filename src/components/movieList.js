import styled from "styled-components";
import MovieCard from "./movieCard";

const Container = styled.div`
  grid-column: span 2 / auto;
  background-color: #191d25;
  border-radius: 10px;
  padding: 15px;
`;

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 40px;
  padding: 10px 0;
`;

const MovieList = ({ movieData }) => {
  return (
    <Container>
      <ListContainer>
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
