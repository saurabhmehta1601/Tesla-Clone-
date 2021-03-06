import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Fade from "react-reveal/Fade";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { animateScroll as scroll } from "react-scroll";
import Image from "next/image";

interface IProps {
  data: {
    title: string;
    description: string;
    bgImage: string;
    darkButtonTitle?: string;
    lightButtonTitle?: string;
  };
}

export const Section = ({
  data: { title, description, darkButtonTitle, lightButtonTitle, bgImage },
}: IProps) => {
  const { allProducts } = useAppSelector((state) => state.products);

  const scrollToNextProduct = () => {
    const nextProductIndex =
      (allProducts.findIndex((product) => product.title === title) + 1) %
      allProducts.length;
    scroll.scrollTo(
      document.getElementById(allProducts[nextProductIndex].title).offsetTop
    );
  };
  return (
    <Container bgImage={bgImage} id={title}>
      <Fade bottom>
        <Text>
          <Heading>{title}</Heading>
          <SubHeading>{description}</SubHeading>
        </Text>
      </Fade>
      <Wrapper>
        <Fade bottom>
          <ButtonGroup>
            {darkButtonTitle && <DarkButton>{darkButtonTitle}</DarkButton>}
            {lightButtonTitle && <LightButton>{lightButtonTitle}</LightButton>}
          </ButtonGroup>
        </Fade>
        <DownArrow
          width={60}
          height={80}
          onClick={scrollToNextProduct}
          src="/images/down-arrow.svg"
        />
      </Wrapper>
    </Container>
  );
};

const Wrapper = styled.div`
  ${tw`relative -bottom-12 `}
`;

const Container = styled.div<{ bgImage: string }>`
  ${tw`h-screen pt-12 pb-12 flex flex-col justify-between text-center `}
  background-image: ${(props) => `url(/images/${props.bgImage})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Text = styled.div``;
const Heading = styled.h1`
  ${tw`text-6xl font-bold text-gray-800 m-0 pt-8 `}
`;
const SubHeading = styled.h3`
  ${tw`text-2xl text-gray-600  mt-2`}
`;
const ButtonGroup = styled.div`
  ${tw` flex justify-center col-gap-20 row-gap-4 items-center mx-auto pb-12 xl:flex-row flex-col `}
  width:fit-content;
`;

const Button = styled.button`
  ${tw`blur bg-white text-black font-bold rounded-full border-none uppercase cursor-pointer  min-w-[250px] py-2 text-sm w-full`}
  word-spacing: 0.3rem;
`;
const DarkButton = styled(Button)`
  ${tw`text-white `}
  background-color: rgba(23, 26, 32, 0.8);
`;
const LightButton = styled(Button)`
  background-color: rgba(244, 244, 244, 0.65);
  color: #393c41;
`;
const DownArrow = styled(Image)`
  ${tw`w-12 h-12 cursor-pointer`}
  animation: animateDownArrow 1.5s  infinite;
`;
