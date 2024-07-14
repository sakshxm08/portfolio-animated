import { Button } from "@chakra-ui/react";
import PropTypes from "prop-types";

const SocialButton = ({ social }) => {
  return (
    <Button
      border={"1px solid"}
      borderColor={"main.500"}
      color={"white"}
      variant="outline"
      leftIcon={social.icon}
      className="  hover:!bg-main-500/20"
    >
      {social.label}
    </Button>
  );
};

export default SocialButton;

SocialButton.propTypes = {
  social: PropTypes.object,
};
