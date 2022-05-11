import { Link } from "react-scroll";
import styled from "styled-components";
import tw from "twin.macro";
import { useAppSelector } from "../redux/hooks";

export const Header = () => {
  const allProducts = useAppSelector((state) => state.products.allProducts);
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
    </Container>
  );
};

const Container = styled.header`
  ${tw`py-4 uppercase fixed w-screen z-10 flex`}
`;
const Logo = styled.a`
  ${tw`flex-1 pl-2`}
`;

const Menu = styled.div`
  ${tw`flex-1 flex justify-center col-gap-20 items-center`}
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
