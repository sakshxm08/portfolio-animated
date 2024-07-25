import {
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Image,
  Img,
  Text,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  const MotionCard = motion(Card);
  return (
    <Link to={project.link} target="_blank">
      <MotionCard
        boxShadow="lg"
        borderRadius="15px"
        bg={"#151515"}
        _hover={{ bg: "#101010" }}
        color={"gray"}
        layoutId={`container-${project._id}`}
        variant={"filled"}
        overflow={"hidden"}
        className="group transition-all cursor-pointer"
      >
        <motion.div
          className={`overflow-hidden bg-[${project.themeColor}]`}
          layoutId={`image-${project._id}`}
        >
          <Image
            src={project?.poster}
            alt={project.name}
            aspectRatio={2}
            className="group-hover:scale-105 transition-all duration-500"
          />
        </motion.div>
        <CardBody
          p={4}
          borderBottom={"1px solid"}
          borderColor={"gray.800"}
          display={"flex"}
          flexDir={"column"}
          gap={4}
        >
          <Flex justifyContent={"space-between"} alignItems={"center"}>
            <Flex align={"center"} gap={4}>
              {project.logo && (
                <Flex
                  align={"center"}
                  justify={"center"}
                  aspectRatio={1}
                  borderRadius={"50%"}
                  overflow={"hidden"}
                >
                  <Img
                    src={project.logo}
                    alt={project.name}
                    w={16}
                    bg={project.isLogoDark ? "#fff" : "black"}
                    p={4}
                  />
                </Flex>
              )}
              <Heading
                as={"h6"}
                fontSize={"xl"}
                fontWeight={600}
                color={"white"}
              >
                {project.name}
              </Heading>
            </Flex>
            <Flex alignItems={"center"} gap={4}>
              <Link to={project.github} target="_blank">
                <FaGithub
                  size={24}
                  className="hover:text-main-500 transition-all cursor-pointer"
                />
              </Link>
              <Link to={project.link} target="_blank">
                <FaArrowUpRightFromSquare
                  size={20}
                  className="hover:text-main-500 transition-all cursor-pointer"
                />
              </Link>
            </Flex>
          </Flex>
          <Flex gap={4} wrap={"wrap"}>
            {project.skills.map((skill) => (
              <Img
                key={skill.name}
                src={skill.icon}
                h={"24px"}
                alt={skill.name}
              />
            ))}
          </Flex>
        </CardBody>
        <CardFooter p={4}>
          <Text fontSize={"sm"}>{project.desc}</Text>
        </CardFooter>
      </MotionCard>
    </Link>
  );
};

export default ProjectCard;

ProjectCard.propTypes = {
  project: PropTypes.object,
  onClick: PropTypes.func,
};
