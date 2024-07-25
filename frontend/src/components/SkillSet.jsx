import { Flex, Heading, Tooltip } from "@chakra-ui/react";
import { motion } from "framer-motion";

const SkillSet = () => {
  const skills = {
    languages: {
      title: "Languages",
      arr: [
        {
          name: "JavaScript",
          icon: "https://asset.brandfetch.io/idq5ck33b2/id8Fb4RR16.png",
        },
        {
          name: "C++",
          icon: "https://asset.brandfetch.io/idOOXqeOLj/idZyC3f2Yv.png",
        },
        {
          name: "Python",
          icon: "https://asset.brandfetch.io/idbpOFBgcc/idcTemqrrW.svg",
        },
      ],
    },
    frameworks: {
      title: "Frameworks / Libraries",
      arr: [
        {
          name: "React",
          icon: "https://asset.brandfetch.io/idREYlLkpD/idvKfh9-rI.svg",
        },
        {
          name: "NodeJS",
          icon: "https://asset.brandfetch.io/id7JRtQEAa/idbaTNuVOV.svg",
        },
        {
          name: "ExpressJS",
          icon: "https://asset.brandfetch.io/idh1lvV1BF/iddg3cqCPj.png",
          invert: true,
        },
        {
          name: "Ruby on Rails",
          icon: "https://asset.brandfetch.io/idxO9z49eB/idKAdgB76M.svg",
        },
      ],
    },
    databases: {
      title: "Databases",
      arr: [
        {
          name: "MongoDB",
          icon: "https://asset.brandfetch.io/ideyyfT0Lp/idmnKnXgYx.svg",
        },
        {
          name: "MySQL",
          icon: "https://asset.brandfetch.io/idBdG8DdKe/idSEhEKy8_.svg",
        },
      ],
    },

    design: {
      title: "Styling",
      arr: [
        {
          name: "TailwindCSS",
          icon: "https://asset.brandfetch.io/idMNEQh7-0/idfGwMXiln.svg",
        },
        {
          name: "ChakraUI",
          icon: "https://asset.brandfetch.io/id6huW-kis/idywy-7zdx.png",
        },
        {
          name: "Bootstrap",
          icon: "https://asset.brandfetch.io/id4Ha8BARu/idOdqMHAiP.svg",
        },
      ],
    },

    tools: {
      title: "Tools and Services",
      arr: [
        {
          name: "Amazon Web Services",
          icon: "https://asset.brandfetch.io/idVoqFQ-78/idAywZeMcx.svg",
        },

        {
          name: "Figma",
          icon: "https://asset.brandfetch.io/idZHcZ_i7F/idbiFtAhmG.webp",
        },
        {
          name: "Git",
          icon: "https://asset.brandfetch.io/idzGznS_EP/idgLZ_0IgA.svg",
        },
        {
          name: "Framer Motion",
          icon: "https://asset.brandfetch.io/idCeIE9B96/iddWy_G46Z.svg",
        },
        {
          name: "Firebase",
          icon: "https://asset.brandfetch.io/idqLag-AIR/idD13V2IEc.svg",
          invert: true,
        },
      ],
    },
  };

  const iconVariants = (duration) => ({
    initial: { y: -6 },
    animate: (index) => {
      return {
        y: [-6, 6],
        transition: {
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
          duration,
          delay: 0.05 * index,
        },
      };
    },
  });

  return (
    <motion.div
      className="mb-48 flex flex-col gap-8"
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <span>
        <Heading color={"white"} as={"h4"}>
          Technologies I Use
        </Heading>
      </span>
      <div className="flex flex-wrap gap-12">
        {Object.keys(skills).map((skill, index) => (
          <motion.div
            key={skills[skill].title}
            initial={{ opacity: 0, x: -0 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 1,
                delay: index * 0.4,
              },
            }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center flex-col gap-4 pr-12 border-r border-r-gray-900"
          >
            <Heading color={"gray"} as={"h5"} fontSize={24}>
              {skills[skill].title}
            </Heading>
            <Flex gap={4}>
              {skills[skill].arr.map((item, ind) => (
                <motion.div
                  key={item.name}
                  initial="initial"
                  whileInView="animate"
                  variants={iconVariants(ind + 2)}
                  whileHover={{ y: -6 }}
                  //   transition={{ delay: ind * 0.2 }}
                  custom={ind}
                >
                  <Tooltip
                    label={item.name}
                    aria-label="A tooltip"
                    borderRadius={"4px"}
                    background={"main.600"}
                  >
                    <div className="rounded-2xl border-2 border-main-800 p-4 flex items-center justify-center">
                      {/* <SiReact className="text-6xl text-cyan-400" /> */}
                      <img
                        src={item.icon}
                        className={`w-12 aspect-square object-contain ${
                          item.invert ? "invert" : ""
                        }`}
                      />
                      {/* {item.icon} */}
                    </div>
                  </Tooltip>
                </motion.div>
              ))}
            </Flex>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillSet;
