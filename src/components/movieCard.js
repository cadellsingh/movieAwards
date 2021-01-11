import { useContext } from "react";
import styled from "styled-components";
import MyContext from "../MyContext";

const Card = styled.div`
  text-align: center;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  & p {
    font-size: 16px;
  }

  & img {
    margin: 10px 0;
    max-width: 100%;
    width: auto;
    height: auto;
    border-radius: 15px;
  }

  @media (max-width: 400px) {
    & p {
      font-size: 14px;
    }
  }
`;

const StyledButton = styled.button`
  width: 60%;
  margin: 0 auto;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  border: none;
  outline: none;
`;

const MovieCard = ({ data, text }) => {
  const { Title: title, Year: year, Poster: poster, imdbID } = data;
  const { nominations, setNominations } = useContext(MyContext);

  let disableOneCard = nominations.some((data) => {
    const { imdbID: id } = data;

    return id === imdbID;
  });

  let disable = nominations.length === 5 || disableOneCard;

  let displayText;

  if (text === "Nominate") {
    displayText = (
      <StyledButton
        disabled={disable}
        onClick={() => setNominations("add", data)}
        style={{ backgroundColor: disable ? "grey" : "#0290e6" }}
      >
        Nominate
      </StyledButton>
    );
  } else {
    displayText = (
      <StyledButton
        onClick={() => setNominations("remove", imdbID)}
        style={{ backgroundColor: "#de3e45" }}
      >
        Remove
      </StyledButton>
    );
  }

  return (
    <Card>
      <p>
        {title} {year}
      </p>
      <img src={poster} alt={title} />
      {displayText}
    </Card>
  );
};

export default MovieCard;
