import { useContext } from "react";
import styled from "styled-components";
import MovieCard from "./movieCard";
import MyContext from "../MyContext";

const Container = styled.div``;

const NominationsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 20px;
  background-color: #191d25;
  border-radius: 10px;
  padding: 15px;
  text-align: center;
`;

const Nomination = styled.p`
  grid-column: span 2 / auto;
  display: flex;
  justify-content: space-between;
`;

const Nominations = () => {
  const { nominations } = useContext(MyContext);

  return (
    <Container>
      <NominationsContainer>
        <Nomination>
          <p>Nominations</p>
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
