import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  grid-column: span 3 / auto;
  background-color: #191d25;
  border-radius: 10px;
`;

const FormContainer = styled.form`
  & input {
    width: 100%;
    background-color: inherit;
    color: white;
    padding: 20px;
    font-size: 20px;
    outline: none;
    border: none;
  }

  & ::placeholder {
    color: white;
  }
`;

const SearchForm = ({ setTitle }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (event) => {
    setTitle(query);
    event.preventDefault();
  };

  return (
    <Container>
      <FormContainer onSubmit={handleSubmit}>
        <input
          type="text"
          aria-label="search movie title"
          placeholder="Search Movie Title"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </FormContainer>
    </Container>
  );
};

export default SearchForm;
