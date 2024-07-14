import { BsArrowRight } from "react-icons/bs";
import { Flex, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
const Projects = () => {
  const projects = ["", "", "", ""];
  return (
    <Grid className="grid grid-cols-2 grid-rows-5 gap-12 ">
      <GridItem pb={20}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
          }}
        >
          <Flex gap={2} direction={"column"}>
            <Heading color={"white"} as={"h4"}>
              All Creative Works
            </Heading>
            <Text color={"gray"} fontSize={"xl"}>
              Here&apos;s some of my projects that I have worked on.
            </Text>
            <Link className="flex items-center gap-2 text-main-500 hover:text-main-500/80 w-fit text-xl font-medium transition-all hover:gap-4">
              Explore More <BsArrowRight />
            </Link>
          </Flex>
        </motion.div>
      </GridItem>
      {projects.map((project, ind) => (
        <GridItem key={ind} rowSpan={2}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.4,
              ease: "easeInOut",
            }}
          >
            <ProjectCard />
          </motion.div>
        </GridItem>
      ))}

      {/* <GridItem rowSpan={2} rowStart={2}>
        <ProjectCard />
      </GridItem>
      <GridItem rowSpan={2} rowStart={3} colStart={2}>
        <ProjectCard />
      </GridItem>
      <GridItem rowSpan={2} rowStart={4}>
        <ProjectCard />
      </GridItem> */}
    </Grid>
  );
};

export default Projects;
