import styled from "styled-components";
import tw from "twin.macro";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <Heading>THis is heading</Heading>
    </div>
  );
}

const Heading = styled.h1`
  ${tw`text-6xl text-blue-400 font-bold text-center`}
`;
