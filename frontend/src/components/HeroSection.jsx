import { Box, Container, Flex, Heading } from "@chakra-ui/react";
import { dottedPattern } from "../assets";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import Terminal from "./Terminal";
import SocialButton from "./SocialButton";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
const RevealText = ({ children, width = "fit-content", delay = 0.5 }) => {
  const ref = useRef(null);
  const inView = useInView(ref);
  const animateText = useAnimation();
  const animateOverlay = useAnimation();

  useEffect(() => {
    if (inView) {
      animateText.start("visible");
      animateOverlay.start("visible");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);
  return (
    <Box ref={ref} pos={"relative"} width={width} overflow={"hidden"}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 25 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={animateText}
        transition={{ duration: 1, delay: delay + 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{ hidden: { left: 0 }, visible: { left: "100%" } }}
        initial="hidden"
        animate={animateOverlay}
        transition={{ duration: 0.8, delay, ease: "easeIn" }}
        className=" absolute top-0 bottom-0 left-0 right-0 bg-main-500 z-20"
      />
    </Box>
  );
};
const HeroSection = () => {
  const contactItems = [
    { label: "Github", icon: <FaGithub className="text-main-500" />, link: "" },
    {
      label: "LinkedIn",
      icon: <FaLinkedin className="text-main-500" />,
      link: "",
    },
    {
      label: "Resume",
      icon: <IoDocumentText className="text-main-500" />,
      link: "",
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.5, when: "beforeChildren" }}
    >
      <Container
        maxW={"7xl"}
        display={"flex"}
        flexDirection={"column"}
        gap={10}
        minH={"80vh"}
        pos={"relative"}
        py={40}
      >
        <img
          src={dottedPattern}
          alt="dotted pattern"
          className="w-40 aspect-square invert-[0.1] absolute top-24 -left-8"
          color="white"
        />
        <Flex direction={"column"} gap={0} zIndex={1} alignItems={"normal"}>
          <RevealText>
            <Heading as={"h4"} color={"main.500"} fontWeight={500}>
              Hey there, I&apos;m-
            </Heading>
          </RevealText>
          <RevealText>
            <Heading as={"h1"} fontSize={"6rem"} fontWeight={900}>
              Saksham Gambhir.
            </Heading>
          </RevealText>
        </Flex>
        <Flex gap={4}>
          <div className="relative overflow-hidden w-fit">
            <Flex dir="row" gap={2}>
              <Heading as={"h4"} fontWeight={700}>
                Full Stack Developer.
              </Heading>
              <Heading as={"h4"} fontWeight={600} color={"gray"}>
                Video Editor.
              </Heading>
            </Flex>
            <motion.div
              className="bg-black z-10 absolute left-0 top-0 h-full w-full"
              initial={{ left: 0 }}
              animate={{ left: "100%" }}
              transition={{ duration: 0.8, delay: 1, ease: "easeIn" }}
            />
          </div>
        </Flex>
        <Flex alignItems={"center"} gap={4} my={4}>
          {contactItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 40 }}
              animate={(ind) => ({
                opacity: 1,
                y: 0,
                transition: {
                  delay: ind * 0.1 + 1.5,
                  duration: 0.4,
                  ease: "easeInOut",
                },
              })}
              // transition={{ duration: 0.6, ease: "easeIn", delay: 2 }}
              custom={index}
            >
              <SocialButton social={item} />
            </motion.div>
          ))}
        </Flex>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
        >
          <Terminal />
        </motion.div>
      </Container>
    </motion.div>
  );
};

export default HeroSection;

RevealText.propTypes = {
  children: PropTypes.node,
  width: PropTypes.string,
  delay: PropTypes.number,
};
