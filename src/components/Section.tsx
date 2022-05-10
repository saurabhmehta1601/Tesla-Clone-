import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

export const Section = () => {
  return (
    <Container>
      <Text>
        <Heading>Model S</Heading>
        <SubHeading>Order Online for touchless delivery </SubHeading>
      </Text>
      <Wrapper>
        <ButtonGroup>
          <DarkButton>Custom Order</DarkButton>
          <LightButton>Existing Inventory</LightButton>
        </ButtonGroup>
        <DownArrow src="/images/down-arrow.svg" />
      </Wrapper>
    </Container>
  );
};

const Wrapper = styled.div``;

const Container = styled.div`
  ${tw`h-screen flex flex-col justify-between text-center`}
  background-image: url("/images/model-s.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Text = styled.div``;
const Heading = styled.h1`
  ${tw`text-6xl font-bold text-gray-800 m-0 p-4`}
`;
const SubHeading = styled.h3`
  ${tw`text-2xl text-gray-600 mt-2`}
`;
const ButtonGroup = styled.div`
  ${tw` flex flex-col row-gap-2  mx-auto `}
  width:fit-content;
`;

const Button = styled.button`
  ${tw`bg-white text-lg text-black font-bold py-2 px-36 rounded-full border-none uppercase cursor-pointer w-full`}
`;
const DarkButton = styled(Button)`
  ${tw`bg-gray-800 text-white `}
`;
const LightButton = styled(Button)``;
const DownArrow = styled.img`
  ${tw`w-12 h-12`}
`;
