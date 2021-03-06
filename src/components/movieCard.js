import { useContext } from "react";
import styled, { keyframes } from "styled-components";
import MyContext from "../MyContext";
import { fadeIn } from "react-animations";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";

const fadeInAnimation = keyframes`${fadeIn}`;

const Card = styled.div`
  text-align: center;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  animation: 3s ${fadeInAnimation};

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
  const { Title: title, Year: year, imdbID } = data;
  let { Poster: poster } = data;
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

  if (poster === "N/A") {
    poster = (
      <span>
        <FontAwesomeIcon icon={faVideo} />
      </span>
    );
  } else {
    poster = <img src={poster} alt={title} />;
  }

  return (
    <Card>
      <p>
        {title} {year}
      </p>
      {poster}
      {displayText}
    </Card>
  );
};

export default MovieCard;
