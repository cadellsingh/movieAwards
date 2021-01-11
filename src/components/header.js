import styled from "styled-components";

const HeaderContainer = styled.header`
  grid-column: span 3 / auto;
  display: flex;
  justify-content: space-between;

  & p {
    margin: auto 0;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h1>The Shoppies</h1>
      <p>some icon</p>
    </HeaderContainer>
  );
};

export default Header;
