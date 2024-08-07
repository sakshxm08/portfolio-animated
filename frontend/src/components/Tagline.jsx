import { Flex, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";

const GradientText = ({ text }) => (
  <span className=" bg-gradient-to-br from-main-300 to-main-600 text-transparent bg-clip-text">
    {text}
  </span>
);
const Tagline = () => {
  return (
    // <Text
    //   fontWeight={800}
    //   fontSize={48}
    //   textTransform={"uppercase"}
    //   py={20}
    //   display={"inline-block"}
    //   className=" bg-gradient-to-r from-main-600 via-main-300 to-main-600 text-transparent bg-clip-text"
    // >
    //   From Code to Frames, I shape Digital Dreams!
    // </Text>

    <Flex
      flexDir={"column"}
      py={20}
      alignItems={"center"}
      justifyContent={"center"}
      pos={"relative"}
      gap={6}
    >
      {/* <ParallaxText baseVelocity={-5}> */}
      <Text fontWeight={800} fontSize={48}>
        From <GradientText text={"Code"} /> to <GradientText text={"Frames"} />,
        I shape Digital Dreams!
      </Text>
      {/* </ParallaxText> */}
      {/* <ParallaxText baseVelocity={-5}>
        <Text fontWeight={800} fontSize={48}>
          From <GradientText text={"Code"} /> to{" "}
          <GradientText text={"Frames"} />, I shape Digital Dreams!
        </Text>
      </ParallaxText> */}
    </Flex>
  );
};

export default Tagline;

GradientText.propTypes = {
  text: PropTypes.string,
};
