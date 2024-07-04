import { Button, Container, Flex, Heading } from "@chakra-ui/react";
import { dottedPattern } from "../assets";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import Terminal from "./Terminal";
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
    <Container
      maxW={"7xl"}
      display={"flex"}
      flexDirection={"column"}
      gap={10}
      minH={"80vh"}
      pos={"relative"}
      py={28}
    >
      <img
        src={dottedPattern}
        alt="dotted pattern"
        className="w-40 aspect-square invert-[0.1] absolute top-24 -left-8"
        color="white"
      />
      <Flex direction={"column"} gap={0} zIndex={1} alignItems={"normal"}>
        <Heading as={"h4"} color={"main.500"} fontWeight={500}>
          Hey there, I&apos;m-
        </Heading>
        <Heading as={"h1"} fontSize={"6rem"} fontWeight={900}>
          Saksham Gambhir.
        </Heading>
      </Flex>
      <Flex gap={4}>
        <Heading as={"h4"} fontWeight={700}>
          Full Stack Developer.
        </Heading>
        <Heading as={"h4"} fontWeight={600} color={"gray"}>
          Video Editor.
        </Heading>
      </Flex>
      <Flex alignItems={"center"} gap={4} my={6}>
        {contactItems.map((item) => (
          <Button
            key={item.label}
            border={"1px solid"}
            borderColor={"main.500"}
            color={"white"}
            variant="outline"
            leftIcon={item.icon}
            className="  hover:!bg-main-500/20"
          >
            {item.label}
          </Button>
        ))}
      </Flex>
      <Terminal />
    </Container>
  );
};

export default HeroSection;
