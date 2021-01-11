import { useContext, useState } from "react";
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
    height: ${(props) => (props.text === "Nominate" ? "200px" : "100px")};
    width: ${(props) => (props.text === "Nominate" ? "200px" : "100px")};
    border-radius: 15px;
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
  const { handleClick, nominations } = useContext(MyContext);

  let disable = nominations.some((data) => {
    const { imdbID: id } = data;

    return id === imdbID;
  });

  let displayText;

  if (text === "Nominate") {
    displayText = (
      <StyledButton
        disabled={disable}
        onClick={() => handleClick("add", data)}
        style={{ backgroundColor: disable ? "grey" : "#0290e6" }}
      >
        Nominate
      </StyledButton>
    );
  } else {
    displayText = (
      <StyledButton
        onClick={() => handleClick("remove", imdbID)}
        style={{ backgroundColor: "#de3e45" }}
      >
        Remove
      </StyledButton>
    );
  }

  return (
    <Card text={text}>
      <p>
        {title} {year}
      </p>
      <img src={poster} alt={title} />
      {displayText}
    </Card>
  );
};

export default MovieCard;
