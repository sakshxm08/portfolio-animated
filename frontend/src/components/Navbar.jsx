import { Container, Flex, Image, Spacer } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { logo } from "../assets";
import { motion } from "framer-motion";

const Navbar = () => {
  const navItems = [
    { label: "Home", link: "/" },
    { label: "Projects", link: "/projects" },
    {
      label: "Resume",
      link: "https://drive.google.com/file/d/1PAwOCj-z3_uYDbyPKANzd2JhCREc3dKA/view?usp=drive_link",
      target: "_blank",
    },
  ];
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Container
        as={"nav"}
        bg={"black"}
        px={12}
        py={3}
        borderBottom={"1px solid"}
        borderColor={"gray.900"}
        minW={"100vw"}
        pos={"sticky"}
        top={0}
        zIndex={1000}
      >
        <Flex>
          <Image src={logo} alt="logo" className=" invert w-16" />
          <Spacer />
          <Flex alignItems={"center"} gap={20}>
            {navItems.map((item) => (
              <NavLink
                key={item.link}
                to={item.link}
                className={({ isActive }) =>
                  (isActive ? "text-main-500" : "text-white") +
                  " font-medium relative after:content-[''] after:absolute after:top-full after:left-0 after:h-px after:w-full after:bg-main-500 after:scale-x-0 hover:after:scale-x-100 after:transition-all transition-all"
                }
                target={item.target}
              >
                {item.label}
              </NavLink>
            ))}
          </Flex>
        </Flex>
      </Container>
    </motion.div>
  );
};

export default Navbar;
