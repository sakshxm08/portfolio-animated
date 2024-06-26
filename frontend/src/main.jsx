import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    main: {
      50: "#edfdfe",
      100: "#d2f9fb",
      200: "#aaf0f7",
      300: "#70e3f0",
      400: "#4cd4e6",
      500: "#12b0c8",
      600: "#128da8",
      700: "#167288",
      800: "#1b5c6f",
      900: "#1b4d5e",
      950: "#0c3240",
    },
  },
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
