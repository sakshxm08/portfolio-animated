import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import { dottedPattern, sakshamTransparent } from "../assets";
import CodeBlock from "./CodeBlock";
import { motion } from "framer-motion";

const About = () => {
  const codeString = `const sakshxm08 = {
    name: "Saksham Gambhir",
    college: "Delhi Technological University",
    tagline: "From Code to Frames, I shape Digital Dreams!",
    pronouns: "He" | "Him",
    askMeAbout: ["web dev", "tech", "design", "dsa", "video editing"],
    code: ["Javascript", "C++", "Python"],
    technologies: {
        frontEnd: {
            styling: ["Bootstrap", "TailwindCSS", "ChakraUI"],
            libraries: "ReactJS"
        },
        backEnd: {
            js: ["NodeJS", "Express"],
            python: ["Django"]
            ruby: ["Ruby on Rails"],
        },
        databases: ["MongoDB", "MySQL"],
        misc: ["Firebase", "Socket.IO", "Git", "GSAP", "Framer Motion", "Figma"]
    },
    architecture: ["Progressive web applications", "Single page applications"],
    funFact: "There are two ways to write error-free programs; only the third one works"
  };`;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <Flex
        alignItems={"start"}
        position={"relative"}
        justifyContent={"space-between"}
        pb={28}
      >
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Box color={"gray"} display={"flex"} flexDirection={"column"} gap={4}>
            <Heading color={"white"} as={"h4"}>
              About Me
            </Heading>

            <CodeBlock>{codeString}</CodeBlock>
            {/* <Box lineHeight={6}>
          Hello! I&apos;m Saksham Gambhir, a passionate full stack developer
          specializing in the MERN stack. I create intuitive, responsive web
          applications using technologies like React, TailwindCSS, and MongoDB.
          With a strong foundation in HTML, CSS, JavaScript, and C++, I excel in
          both frontend and backend development. I am currently pursuing a
          degree in Electronics and Communication Engineering at Delhi
          Technological University. My projects showcase my ability to blend
          technical skills with creative design, delivering effective and
          engaging digital solutions.
        </Box> */}
          </Box>
        </motion.div>

        <motion.div
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Box w={"fit-content"} pos={"relative"} pr={20} py={8}>
            <Image
              src={sakshamTransparent}
              w={"360px"}
              zIndex={100}
              pos={"relative"}
            />
            <Image
              src={dottedPattern}
              className="absolute top-0 right-0 invert-[0.1]"
              w="200px"
            />
          </Box>
        </motion.div>
      </Flex>
    </motion.div>
  );
};

export default About;
