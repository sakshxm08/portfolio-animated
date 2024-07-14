import { Container } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./layout/Home";
import Login from "./pages/Login";
import { useEffect } from "react";
import axios from "axios";

const Layout = () => {
  return (
    <Container
      p={0}
      as={"main"}
      bg={"black"}
      color={"white"}
      minH={"100vh"}
      minW={"100vw"}
    >
      <Navbar />
      <Outlet />
    </Container>
  );
};

function App() {
  useEffect(() => {
    const getAllProjects = async () => {
      const response = await fetch(
        import.meta.env.VITE_APP_BASE_URL + "/project"
      );
      const json = await response.json();
      if (!response.ok) {
        // return toast.error(json.error);
        console.log("error");
      }
      if (response.ok) {
        console.log(json);
        // console.log(json);
      }
    };
    getAllProjects();
  }, []);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "about",
          element: <></>,
        },
        {
          path: "projects",
          element: <></>,
        },
        {
          path: "contact",
          element: <></>,
        },
      ],
    },
    {
      path: "auth",
      element: <Login />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
