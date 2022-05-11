import styled from "styled-components";
import tw from "twin.macro";

export const Header = () => {
  return (
    <Container>
      <Logo>
        <img src="/images/logo.svg" />
      </Logo>
      <Menu>
        <MenuItem>Model S</MenuItem>
        <MenuItem>Model 3</MenuItem>
        <MenuItem>Model X</MenuItem>
        <MenuItem>Model Y</MenuItem>
      </Menu>
    </Container>
  );
};

const Container = styled.header`
  ${tw`flex py-6 px-8 uppercase bg-blue-600 `}
  position: sticky;
  position: -webkit-sticky;
`;
const Logo = styled.a`
  ${tw`flex-1 `}
`;
const Menu = styled.div``;
const MenuItem = styled.a``;
