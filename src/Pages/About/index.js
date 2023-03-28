import React from "react";
import { Flex } from "@chakra-ui/react";
import Hero from "./components/hero";
import Journey from "./components/Journey";
import Team from "./components/Team";

const About = () => {
  return (
    <Flex flexDirection="column">
      <Hero />
      <Journey />
      <Team />
    </Flex>
  );
};

export default About;
