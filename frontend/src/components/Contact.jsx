import { Box, Center, Container, Flex, Heading } from "@chakra-ui/react";
import SocialButton from "./SocialButton";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const contactItems = [
    {
      label: "LinkedIn",
      icon: <FaLinkedin className="text-main-500" />,
      link: "",
    },
    {
      label: "Email",
      icon: <MdEmail className="text-main-500" />,
      link: "",
    },
  ];
  return (
    <Container
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      py={160}
      mt={40}
      flexDirection={"column"}
      gap={10}
    >
      <Heading fontSize={48} fontWeight={900}>
        Keep in Touch
      </Heading>
      <Center flexDirection={"column"} color={"gray"} fontSize={18}>
        <Box>
          I&apos;m currently open to work as a{" "}
          <span className="text-main-500">Full Stack Developer</span>.
        </Box>
        <Box>Let&apos;s get in touch and talk more about your projects.</Box>
      </Center>
      <Flex alignItems={"center"} gap={4}>
        {contactItems.map((item) => (
          <SocialButton key={item.label} social={item} />
        ))}
      </Flex>
    </Container>
  );
};

export default Contact;
