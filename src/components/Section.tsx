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
      <ButtonGroup>
        <DarkButton>Custom Order</DarkButton>
        <LightButton>Existing Inventory</LightButton>
      </ButtonGroup>
    </Container>
  );
};

const Container = styled.div`
  ${tw`h-screen flex flex-col justify-between text-center`}

  background-image: url("/images/model-s.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Heading = styled.h1``;
const SubHeading = styled.h3``;
const Text = styled.div``;
const ButtonGroup = styled.div`
  ${tw`flex p-8 flex-col  self-center row-gap-2`}
`;

const Button = styled.button`
  ${tw`bg-white text-lg text-black font-bold py-2 px-36 rounded-full border-none uppercase`}
`;
const DarkButton = styled(Button)`
  ${tw`bg-gray-800 text-white `}
`;
const LightButton = styled(Button)``;
