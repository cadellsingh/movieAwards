import { useContext } from "react";
import styled from "styled-components";
import MyContext from "../MyContext";

const Container = styled.div`
  margin: 15px auto;
  text-align: center;

  & button {
    cursor: pointer;
    background-color: #0090e7;
    padding: 10px;
    color: white;
    outline: none;
    border: none;
  }

  & button:first-child {
    margin-right: 10px;
  }
`;

const ChangePage = () => {
  const { setPageNumber, pageNumber } = useContext(MyContext);

  const handlePrevPageClick = () => {
    pageNumber === 1 ? setPageNumber(1) : setPageNumber(pageNumber - 1);
  };

  return (
    <Container>
      <button onClick={handlePrevPageClick}>Prev page</button>
      <button onClick={() => setPageNumber(pageNumber + 1)}>Next page</button>
    </Container>
  );
};

export default ChangePage;
