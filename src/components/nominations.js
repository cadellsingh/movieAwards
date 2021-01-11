import { useContext } from "react";
import styled from "styled-components";
import MovieCard from "./movieCard";
import MyContext from "../MyContext";

const Container = styled.div`
  grid-column: span 1 / auto;

  @media (max-width: 900px) {
    grid-column: span 3 / auto;
  }
`;

const NominationsContainer = styled.div`
  display: grid;
  background-color: ${({ theme }) => theme.secondaryColor};
  border-radius: 10px;
  padding: 15px;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 20px;
  text-align: center;
  grid-column-gap: 20px;

  @media (max-width: 900px) {
    grid-column: span 3 / auto;
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Nomination = styled.div`
  grid-column: span 2 / auto;
  display: flex;
  justify-content: space-between;

  @media (max-width: 900px) {
    grid-column: span 3 / auto;
    justify-content: normal;

    & p:nth-child(2n) {
      margin-left: 5px;
    }
  }

  @media (max-width: 600px) {
    grid-column: span 2 / auto;
  }
`;

const Nominations = () => {
  const { nominations } = useContext(MyContext);

  return (
    <Container>
      <NominationsContainer>
        <Nomination>
          <p>Nominations: </p>
          <p>{nominations.length}</p>
        </Nomination>
        {nominations &&
          nominations.map((data) => {
            const { imdbID } = data;
            return <MovieCard key={imdbID} data={data} text="Remove" />;
          })}
      </NominationsContainer>
    </Container>
  );
};

export default Nominations;
