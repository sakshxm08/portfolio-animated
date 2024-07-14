import { Center } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Center py={4} fontSize={14} gap={1} fontWeight={300}>
      &copy; 2024. All Rights Reserved{" "}
      <span className="text-main-500 font-medium">@sakshxm08</span>
    </Center>
  );
};

export default Footer;
