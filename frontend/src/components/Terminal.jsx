import { GoCopy } from "react-icons/go";
import { Box, Code, Flex, Text, useClipboard } from "@chakra-ui/react";
import { MdDone } from "react-icons/md";
const Terminal = () => {
  const { onCopy, hasCopied } = useClipboard("npx sakshxm08");
  return (
    <Code
      bg={"gray.800"}
      color={"white"}
      py={2}
      px={4}
      borderRadius={"6px"}
      maxW={"lg"}
      lineHeight={10}
    >
      <Text color={"gray"}>
        {"// Hit this in your terminal to connect with me. "}
      </Text>
      <Flex
        alignItems={"center"}
        justifyContent={"space-between"}
        pl={4}
        borderLeft={"1px solid"}
        borderColor={"gray.700"}
      >
        <Text>
          <span className="text-main-500">npx</span> sakshxm08
        </Text>
        <Box
          aspectRatio={1}
          w={8}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          border={"1px solid"}
          borderColor={"gray.600"}
          borderRadius={"4px"}
          _hover={{ borderColor: "main.600" }}
          cursor={"pointer"}
          className="transition-all"
          onClick={onCopy}
        >
          {hasCopied ? <MdDone className="text-main-500" /> : <GoCopy />}
        </Box>
      </Flex>
    </Code>
  );
};

export default Terminal;
