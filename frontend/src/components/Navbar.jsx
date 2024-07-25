import { Container, Flex, Image, Spacer } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { logo } from "../assets";
import { motion } from "framer-motion";

const Navbar = () => {
  const navItems = [
    {
      label: "Resume",
      link: "https://drive.google.com/file/d/1PAwOCj-z3_uYDbyPKANzd2JhCREc3dKA/view?usp=drive_link",
      target: "_blank",
    },
  ];
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 bg-black border-b border-gray-900 w-screen z-50"
    >
      <Container px={12} py={3} w={"100%"} minW={"100vw"}>
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
    </motion.nav>
  );
};

export default Navbar;
