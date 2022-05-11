import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Fade from "react-reveal/Fade";

export const Section = ({
  data: { title, description, darkButtonTitle, lightButtontitle, bgImage },
}) => {
  return (
    <Container bgImage={bgImage}>
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
            {lightButtontitle && <LightButton>{lightButtontitle}</LightButton>}
          </ButtonGroup>
        </Fade>
        <DownArrow src="/images/down-arrow.svg" />
      </Wrapper>
    </Container>
  );
};

const Wrapper = styled.div`
  ${tw`relative -bottom-12 `}
`;

const Container = styled.div`
  ${tw`h-screen pt-12 pb-12 flex flex-col justify-between text-center `}
  background-image: ${(props) => `url(/images/${props.bgImage})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Text = styled.div``;
const Heading = styled.h1`
  ${tw`text-6xl font-bold text-gray-800 m-0 `}
`;
const SubHeading = styled.h3`
  ${tw`text-2xl text-gray-600  mt-2`}
`;
const ButtonGroup = styled.div`
  ${tw` flex justify-around row-gap-4 items-center mx-auto pb-12 xl:flex-row flex-col`}
`;

const Button = styled.button`
  ${tw`blur opacity-95 tracking-widest  bg-white text-sm text-black font-bold py-4 px-36 rounded-full border-none uppercase cursor-pointer w-full max-w-xl`}
  word-spacing: 0.3rem;
`;
const DarkButton = styled(Button)`
  ${tw`bg-gray-800 text-white `}
`;
const LightButton = styled(Button)``;
const DownArrow = styled.img`
  ${tw`w-12 h-12`}
  animation: animateDownArrow 1.5s  infinite;
`;
