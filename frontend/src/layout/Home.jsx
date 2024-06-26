import { Center, Container } from "@chakra-ui/react";

import HeroSection from "../pages/HeroSection";
import Tagline from "../components/Tagline";
import About from "../components/About";

const Home = () => {
  return (
    <Container minW={"100vw"}>
      <HeroSection />
      <Center className="bg-gradient-to-r from-black via-gray-900 to-black">
        <Tagline />
      </Center>
      <About />
    </Container>
  );
};

export default Home;
