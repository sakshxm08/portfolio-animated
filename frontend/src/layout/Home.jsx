import { Center, Container } from "@chakra-ui/react";

import HeroSection from "../components/HeroSection";
import Tagline from "../components/Tagline";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

import { motion } from "framer-motion";
import SkillSet from "../components/SkillSet";
const Home = () => {
  return (
    <Container minW={"100vw"}>
      <HeroSection />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, type: "tween" }}
      >
        <Center className="bg-gradient-to-r from-black via-gray-900 to-black">
          <Tagline />
        </Center>
      </motion.div>
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
        <SkillSet />
        <Projects />
        <Contact />
      </Container>
      <Footer />
    </Container>
  );
};

export default Home;
