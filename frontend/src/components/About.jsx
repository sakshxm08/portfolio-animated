import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import { dottedPattern, sakshamTransparent } from "../assets";

const About = () => {
  return (
    <Flex
      alignItems={"start"}
      position={"relative"}
      justifyContent={"space-between"}
    >
      <Box
        w={"50%"}
        color={"gray"}
        display={"flex"}
        flexDirection={"column"}
        gap={4}
      >
        <Heading color={"white"} as={"h4"}>
          About Me
        </Heading>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aliquid
        eum odio omnis ut tempora quidem, quae facere atque recusandae suscipit
        pariatur nisi optio sequi consectetur, ab amet! Accusamus, quae culpa
        adipisci id dolorem iure molestias quod ab cupiditate quo inventore
        aspernatur quasi porro. Fugit unde nihil itaque voluptates doloremque
        atque recusandae obcaecati, soluta quibusdam suscipit repellendus nobis
        nemo fugiat distinctio minima tempore, omnis fuga, culpa dignissimos
        eius inventore adipisci ipsum ex! Dicta corrupti accusamus error
        similique laudantium modi saepe. Eligendi dolorum quod error,
        praesentium aspernatur cupiditate suscipit est eum similique quae quia
        et pariatur itaque debitis nihil, facilis explicabo illum exercitationem
        voluptatem enim rem optio
      </Box>
      <Box w={"fit-content"} pos={"relative"} px={20} py={8}>
        <Image
          src={sakshamTransparent}
          w={"400px"}
          zIndex={100}
          pos={"relative"}
        />
        <Image
          src={dottedPattern}
          className="absolute top-0 right-0 invert-[0.1]"
          w="200px"
        />
      </Box>
    </Flex>
  );
};

export default About;
