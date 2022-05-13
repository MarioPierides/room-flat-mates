import styled from 'styled-components';

export default function Navbar() {
  return (
    <StyledNavbar>
      <StyledButton as="a">Rooms</StyledButton>

      <StyledButton as="a">Flat Mates</StyledButton>
    </StyledNavbar>
  );
}

const StyledNavbar = styled.nav`
  display: flex;
  position: fixed;
  justify-content: space-around;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: whitesmoke;
  z-index: 0;
`;

const StyledButton = styled.button`
  color: black;
  background-color: grey;
  font-size: 20px;
  font-weight: 800;
  text-align: center;
  text-decoration: none;
  padding: 1rem;
  border-radius: 10px;
  border: 1px solid black;
  width: 150px;
`;
