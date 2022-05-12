import { Link } from "react-scroll";
import styled from "styled-components";
import tw from "twin.macro";
import { openSidebar } from "../redux/features/uiSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

export const Header = () => {
  const dispatch = useAppDispatch();
  const allProducts = useAppSelector((state) => state.products.allProducts);
  const handleHamburgerMenuButtonClick = () => {
    dispatch(openSidebar());
  };

  return (
    <Container>
      <Logo>
        <img src="/images/logo.svg" />
      </Logo>
      <ProductsMenu>
        {allProducts &&
          allProducts
            .filter((product) => product.type === "car")
            .map((product) => (
              <MenuItem>
                <Link
                  to={product.title}
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  {product.title}
                </Link>
              </MenuItem>
            ))}
      </ProductsMenu>
      <UserMenu>
        <MenuItem>Shop</MenuItem>
        <MenuItem>Account</MenuItem>
        <MenuItem>Menu</MenuItem>
      </UserMenu>
      <HamburgerMenu onClick={handleHamburgerMenuButtonClick}>
        <div></div>
        <div></div>
        <div></div>
      </HamburgerMenu>
    </Container>
  );
};

const Container = styled.header`
  ${tw`py-4 uppercase fixed w-screen z-10 flex items-center `}
`;
const Logo = styled.a`
  ${tw`flex-1 pl-4`}
`;

const Menu = styled.div`
  ${tw`flex-1 justify-center col-gap-20 items-center hidden lg:flex`}
`;
const ProductsMenu = styled(Menu)`
  ${tw`flex-auto `}
`;

const UserMenu = styled(Menu)`
  ${tw`flex-1 col-gap-10`}
`;
const MenuItem = styled.a`
  ${tw`font-bold text-sm cursor-pointer`}
`;

const HamburgerMenu = styled.div`
  ${tw`h-6 w-9 mr-8 relative lg:hidden`}
  div {
    ${tw`w-full h-[4px] bg-gray-500 absolute bg-gray-800 rounded-sm`}
  }
  div:nth-child(1) {
    ${tw`top-0 left-0`}
  }
  div:nth-child(2) {
    ${tw`left-0`}
    top: 50%;
  }
  div:nth-child(3) {
    ${tw`bottom-0 left-0`}
    top: 100%;
  }
`;
