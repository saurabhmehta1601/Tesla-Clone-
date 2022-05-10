import styled from "styled-components";
import tw from "twin.macro";

export default function Home() {
  return (
    <div>
      <Heading>THis is heading</Heading>
    </div>
  );
}

const Heading = styled.h1`
  ${tw`text-6xl text-blue-400 font-bold text-center`}
`;
