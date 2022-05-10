import styled from "styled-components";
import tw from "twin.macro";
import { Section } from "../components/Section";

export default function Home() {
  return (
    <Container>
      <Section />
    </Container>
  );
}

const Container = styled.h1`
  ${tw`h-screen bg-gray-500`}
`;
