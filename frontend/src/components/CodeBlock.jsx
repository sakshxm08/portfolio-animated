import PropTypes from "prop-types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeBlock = ({ children }) => {
  const customStyle = {
    ...tomorrow,
    'code[class*="language-"]': {
      ...tomorrow['code[class*="language-"]'],
      color: "#128da8",
      borderRadium: "6px",
    },
    'pre[class*="language-"]': {
      ...tomorrow['pre[class*="language-"]'],
      background: "#1A202C",
      padding: "1rem 4rem 1rem 1rem",
      width: "100%",
      fontSize: "12px",
      borderRadius: "6px",
    },
  };
  return (
    <SyntaxHighlighter language={"js"} style={customStyle}>
      {children}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;

CodeBlock.propTypes = {
  children: PropTypes.node,
};
