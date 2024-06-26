import { Container, Flex, Spacer } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navItems = [
    { label: "Home", link: "/" },
    { label: "About", link: "/about" },
    { label: "Projects", link: "/projects" },
    { label: "Contact", link: "/contact" },
  ];
  return (
    <Container
      as={"nav"}
      bg={"black"}
      px={12}
      py={3}
      borderBottom={"1px solid"}
      borderColor={"gray.900"}
      minW={"100vw"}
    >
      <Flex>
        <img
          src="https://s3.ap-south-1.amazonaws.com/assets.sakshxm08.in/sakshxm08-logo-transparent"
          alt=""
          className=" invert w-16"
        />
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
            >
              {item.label}
            </NavLink>
          ))}
        </Flex>
      </Flex>
    </Container>
  );
};

export default Navbar;
