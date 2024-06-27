import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const ProjectCard = () => {
  return (
    <Card
      bg={"#151515"}
      _hover={{ bg: "#101010" }}
      color={"gray"}
      variant={"filled"}
      overflow={"hidden"}
      className="group transition-all cursor-pointer"
    >
      <Box overflow={"hidden"}>
        <Image
          objectFit="cover"
          src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Chakra UI"
          aspectRatio={2}
          className="group-hover:scale-105 transition-all duration-500"
        />
      </Box>
      <CardBody p={4} borderBottom={"1px solid"} borderColor={"gray.800"}>
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Heading as={"h6"} fontSize={"xl"} fontWeight={600} color={"white"}>
            WearWorx
          </Heading>
          <Flex alignItems={"center"} gap={4}>
            <FaGithub
              size={24}
              className="hover:text-main-500 transition-all cursor-pointer"
            />
            <FaArrowUpRightFromSquare
              size={20}
              className="hover:text-main-500 transition-all cursor-pointer"
            />
          </Flex>
        </Flex>
      </CardBody>
      <CardFooter p={4}>
        <Text fontSize={"sm"}>
          With Chakra UI, I wanted to sync the speed of development with the
        </Text>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
