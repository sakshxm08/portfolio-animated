import { Flex, Heading, Tooltip } from "@chakra-ui/react";
import { motion } from "framer-motion";

const SkillSet = () => {
  const skills = {
    languages: {
      title: "Languages",
      arr: [
        {
          name: "JavaScript",
          //   icon: <SiJavascript className="text-5xl text-[#f7df1e]" />,
          icon: "https://asset.brandfetch.io/idq5ck33b2/id8Fb4RR16.png",
        },
        {
          name: "C++",
          //   icon: <SiCplusplus className="text-5xl text-cyan-400" />,
          icon: "https://asset.brandfetch.io/idOOXqeOLj/idZyC3f2Yv.png",
        },
        {
          name: "Python",
          //   icon: <SiPython className="text-5xl text-cyan-400" />,
          icon: "https://asset.brandfetch.io/idbpOFBgcc/idcTemqrrW.svg",
        },
        {
          name: "Ruby on Rails",
          //   icon: <SiRubyonrails className="text-5xl text-cyan-400" />,
          //   icon: "https://brandfetch.com/rubyonrails.org?library=default&collection=logos&asset=idgYHdOlsD&view=overview",
          icon: "https://asset.brandfetch.io/idxO9z49eB/idKAdgB76M.svg",
        },
      ],
    },
    frameworks: {
      title: "Frameworks / Libraries",
      arr: [
        {
          name: "React",
          //  icon: <SiReact className="text-5xl text-cyan-400" />
          icon: "https://asset.brandfetch.io/idREYlLkpD/idvKfh9-rI.svg",
        },
        {
          name: "NodeJS",
          //   icon: <SiNodedotjs className="text-5xl text-cyan-400" />,
          icon: "https://asset.brandfetch.io/id7JRtQEAa/idbaTNuVOV.svg",
        },
        {
          name: "ExpressJS",
          //   icon: <SiExpress className="text-5xl text-cyan-400" />,
          icon: "https://asset.brandfetch.io/idh1lvV1BF/iddg3cqCPj.png",
          invert: true,
        },
      ],
    },
    databases: {
      title: "Databases",
      arr: [
        {
          name: "MongoDB",
          //   icon: <SiMongodb className="text-5xl text-cyan-400" />,
          icon: "https://asset.brandfetch.io/ideyyfT0Lp/idmnKnXgYx.svg",
        },
        {
          name: "MySQL",
          icon: "https://asset.brandfetch.io/idBdG8DdKe/idSEhEKy8_.svg",
          // icon: <SiMysql className="text-5xl text-cyan-400" />
        },
      ],
    },

    design: {
      title: "Styling",
      arr: [
        {
          name: "TailwindCSS",
          icon: "https://asset.brandfetch.io/idMNEQh7-0/idfGwMXiln.svg",
          //   icon: <SiTailwindcss className="text-5xl text-cyan-400" />,
        },
        {
          name: "ChakraUI",
          icon: "https://asset.brandfetch.io/id6huW-kis/idywy-7zdx.png",
          //   icon: <SiChakraui className="text-5xl text-cyan-400" />,
        },
        {
          name: "Bootstrap",
          icon: "https://asset.brandfetch.io/id4Ha8BARu/idOdqMHAiP.svg",
          //   icon: <SiBootstrap className="text-5xl text-cyan-400" />,
        },
      ],
    },

    tools: {
      title: "Tools and Services",
      arr: [
        {
          name: "Amazon Web Services",
          icon: "https://asset.brandfetch.io/idVoqFQ-78/idAywZeMcx.svg",
          //   icon: <SiAmazonaws className="text-5xl text-cyan-400" />,
        },

        {
          name: "Figma",
          icon: "https://asset.brandfetch.io/idZHcZ_i7F/idbiFtAhmG.webp",
          //  icon: <SiFigma className="text-5xl text-cyan-400" />
        },
        {
          name: "Git",
          icon: "https://asset.brandfetch.io/idzGznS_EP/idgLZ_0IgA.svg",
          // icon: <SiGit className="text-5xl text-cyan-400" />
        },
        {
          name: "Framer Motion",
          icon: "https://asset.brandfetch.io/idCeIE9B96/iddWy_G46Z.svg",
          //   icon: <SiFramer className="text-5xl text-cyan-400" />,
        },
        {
          name: "Firebase",
          icon: "https://asset.brandfetch.io/idqLag-AIR/idD13V2IEc.svg",
          invert: true,
          //   icon: <SiFirebase className="text-5xl text-cyan-400" />,
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
  // { name: "HTML", icon: <SiHtml5 /> },
  // { name: "CSS", icon: <SiCss3 /> },
  console.log(Object.keys(skills).map((item) => console.log(item)));
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
