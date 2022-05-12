import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Link } from "react-scroll";
import { closeSidebar } from "../redux/features/uiSlice";

export const Sidebar = () => {
  const allProducts = useAppSelector((state) => state.products.allProducts);
  const isSidebarOpen = useAppSelector((state) => state.ui.sidebar.isOpen);
  const dispatch = useAppDispatch();
  const handleCloseButtonClick = () => {
    dispatch(closeSidebar());
  };

  return (
    <CustomSidebar isSidebarOpen={isSidebarOpen}>
      <CloseButtonWrapper onClick={handleCloseButtonClick} />
      <Menu>
        {allProducts.map((product) => (
          <>
            <MenuItem>
              <Link to={product.title} spy={true} smooth={true} duration={500}>
                {product.title}
              </Link>
            </MenuItem>
            <Underline />
          </>
        ))}
      </Menu>
    </CustomSidebar>
  );
};

const CustomSidebar = styled.div<{ isSidebarOpen: boolean }>`
  ${tw`fixed h-screen top-0 right-0 bg-white min-w-[250px] z-20 `}
  transition: transform 0.5s ease-in-out;
  transform: ${(props) =>
    props.isSidebarOpen ? "translateX(0)" : "translateX(100%)"};
`;

const CloseButtonWrapper = styled.div`
  ${tw`relative h-12 `}
  &::before,&::after {
    ${tw`absolute bg-gray-900 h-[3px] w-5 top-6 right-4`}
    content: "";
  }
  &::before {
    transform: rotateZ(45deg);
  }
  &::after {
    transform: rotateZ(-45deg);
  }
`;

const Menu = styled.div``;
const MenuItem = styled.div`
  ${tw`px-4 py-2 font-semibold `}
`;

const Underline = styled.div`
  ${tw`h-[2px] bg-gray-400 mx-4 rounded-lg `}
`;
