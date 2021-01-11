import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const HeaderContainer = styled.header`
  grid-column: span 3 / auto;
  display: flex;
  justify-content: space-between;
  margin: auto 0;

  & span {
    margin: auto 0;
    font-size: 30px;
    cursor: pointer;
  }

  @media (max-width: 400px) {
    & h1 {
      font-size: 25px;
    }
  }
`;

const Header = ({ theme, themeToggler }) => {
  return (
    <HeaderContainer>
      <h1>The Shoppies</h1>
      <span>
        <FontAwesomeIcon
          icon={theme === "light" ? faMoon : faSun}
          onClick={themeToggler}
        />
      </span>
    </HeaderContainer>
  );
};

export default Header;
