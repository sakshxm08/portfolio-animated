import { Flex, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";
import { LayoutGroup, motion } from "framer-motion";
import { PROJECT_ASSETS } from "../assets";

const Projects = () => {
  const projects = [
    {
      _id: 1,
      name: "WearWorx",
      themeColor: "#b8e4b8",
      desc: "A MERN stack e-commerce platform featuring a robust authentication system, intuitive user interfaces, and custom logo design.",
      logo: PROJECT_ASSETS.wearworx.logo,
      isLogoDark: true,
      poster: PROJECT_ASSETS.wearworx.poster,
      skills: [
        {
          name: "React.js",
          icon: "https://img.shields.io/badge/react-black?style=for-the-badge&logo=react&logoColor=%2361DAFB",
        },
        {
          name: "NodeJS",
          icon: "https://img.shields.io/badge/NodeJS-%235FA04E?style=for-the-badge&logo=nodedotjs&logoColor=%23ffffff",
        },
        {
          name: "ExpressJS",
          icon: "https://img.shields.io/badge/ExpressJS-black?style=for-the-badge&logo=express&logoColor=%23ffffff",
        },
        {
          name: "TailwindCSS",
          icon: "https://img.shields.io/badge/tailwind%20CSS-%2306B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white",
        },
        {
          name: "MongoDB",
          icon: "https://img.shields.io/badge/MongoDB-%2347A248?style=for-the-badge&logo=mongodb&logoColor=%23ffffff",
        },
      ],
      link: "https://wearworx.sakshxm08.in/",
      github: "https://www.github.com/sakshxm08/wearworx_mern",
    },
    {
      _id: 2,
      name: "GitFolio",
      themeColor: "#ffffff",

      desc: "A web application utilizing HTML, TailwindCSS, and JavaScript to interactively display GitHub user details and repository information fetched via the GitHub API.",
      logo: PROJECT_ASSETS.gitfolio.logo,
      isLogoDark: true,
      poster: PROJECT_ASSETS.gitfolio.poster,
      skills: [
        {
          name: "TailwindCSS",
          icon: "https://img.shields.io/badge/tailwind%20CSS-%2306B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white",
        },
        {
          name: "HTML",
          icon: "https://img.shields.io/badge/HTML-%23E34F26?style=for-the-badge&logo=html5&logoColor=white",
        },
        {
          name: "GitHub API",
          icon: "https://img.shields.io/badge/github_API-%23181717?style=for-the-badge&logo=github&logoColor=white",
        },
        {
          name: "JavaScript",
          icon: "https://img.shields.io/badge/javascript-%23F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
        },
      ],
      link: "https://gitfolio.sakshxm08.in/",
      github: "https://www.github.com/sakshxm08/gitfolio",
    },
    {
      _id: 3,
      themeColor: "#199982",
      desc: "This website is an interative design for a payment portal of a website with CSS animations like flipping of card.",
      name: "Interactive Payment Page Design",
      poster: PROJECT_ASSETS.payment.poster,
      skills: [
        {
          name: "HTML",
          icon: "https://img.shields.io/badge/HTML-%23E34F26?style=for-the-badge&logo=html5&logoColor=white",
        },
        {
          name: "CSS",
          icon: "https://img.shields.io/badge/CSS-%231572B6?style=for-the-badge&logo=css3&logoColor=white",
        },
        {
          name: "JavaScript",
          icon: "https://img.shields.io/badge/javascript-%23F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
        },
      ],
      link: "https://payment.sakshxm08.in/",
      github: "https://www.github.com/sakshxm08/payment-page",
    },
  ];

  return (
    <LayoutGroup>
      <Grid className="grid grid-cols-2 gap-12 ">
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
            </Flex>
          </motion.div>
        </GridItem>
        {projects.map((project, ind) => (
          <GridItem key={ind} rowSpan={2}>
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 1 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                  delay: 0.4,
                  ease: "easeInOut",
                },
              }}
              viewport={{ once: true }}
            >
              <ProjectCard project={project} />
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
    </LayoutGroup>
  );
};

export default Projects;
