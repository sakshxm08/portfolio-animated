import { Center, Container } from "@chakra-ui/react";

import HeroSection from "../pages/HeroSection";
import Tagline from "../components/Tagline";
import About from "../components/About";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <Container minW={"100vw"}>
      <HeroSection />
      <Center className="bg-gradient-to-r from-black via-gray-900 to-black">
        <Tagline />
      </Center>
      <Container
        maxW={"7xl"}
        display={"flex"}
        flexDirection={"column"}
        gap={10}
        minH={"80vh"}
        pos={"relative"}
        py={28}
      >
        <About />
        <Projects />
      </Container>
    </Container>
  );
};

export default Home;
