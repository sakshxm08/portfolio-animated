import {
  Box,
  Container,
  Flex,
  FormLabel,
  Heading,
  Image,
  Input,
  useToast,
} from "@chakra-ui/react";
import { logo } from "../assets";
import { Form, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { IoEye, IoEyeOffOutline } from "react-icons/io5";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const toast = useToast();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [passHidden, setPassHidden] = useState(true);

  const pass_input = useRef();

  const togglePass = () => {
    setPassHidden(!passHidden);
    if (passHidden) pass_input.current.type = "text";
    else pass_input.current.type = "password";
  };

  const login = async (e) => {
    e.preventDefault();
    let error = "";
    const loginPromise = axios
      .post(import.meta.env.VITE_BACKEND_BASE_URL + "/auth/login", {
        username,
        password,
      })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("user", res.data);

        setUsername("");
        setPassword("");
        setPassHidden(true);
        navigate("/");
      })
      .catch((err) => {
        // console.log(err.response.data.error);
        error = err.response.data.error;
        console.log(error);
        return Promise.reject(err);
      });

    toast.promise(loginPromise, {
      success: {
        title: (
          <div>
            Welcome <span className="font-bold">{"sakshxm08"}</span>
          </div>
        ),
        status: "success",
        duration: 4000,
        position: "top",
        isClosable: true,
      },
      error: {
        title: error,
        status: "error",
        duration: 4000,
        position: "top",
        isClosable: true,
      },
      loading: { title: "Logging in..." },
    });
  };
  return (
    <Container
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      minH={"100vh"}
    >
      <Flex
        border={"1px solid"}
        borderColor={"gray.600"}
        p={8}
        w={"100%"}
        maxW={"md"}
        borderRadius={"16px"}
        direction="column"
        align={"center"}
        color={"white"}
        gap={4}
      >
        <Image src={logo} alt="logo" className=" invert w-16" />
        <Heading as={"h4"} fontSize={18}>
          sakshxm08.in
        </Heading>
        <Heading as={"h2"} fontSize={28} fontWeight={800}>
          Verify Yourself
        </Heading>

        <Form className="space-y-6 w-full" onSubmit={login}>
          <Box>
            <FormLabel
              htmlFor="username"
              w={"fit-content"}
              fontSize={"sm"}
              fontWeight={"500"}
              lineHeight={"1.5rem"}
            >
              Username
            </FormLabel>
            <Box>
              <Input
                id="username"
                name="username"
                type="text"
                autoComplete="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                w={"100%"}
                borderRadius={"8px"}
                border={"1px solid gray"}
                py={4}
                px={4}
                _focusVisible={{ borderColor: "main.500" }}
              />
            </Box>
          </Box>

          <Box>
            <Flex align={"center"} justify={"space-between"}>
              <FormLabel
                htmlFor="password"
                w={"fit-content"}
                fontSize={"sm"}
                fontWeight={"500"}
                lineHeight={"1.5rem"}
              >
                Password
              </FormLabel>
            </Flex>
            <Box className="relative">
              <Input
                ref={pass_input}
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                w={"100%"}
                borderRadius={"8px"}
                border={"1px solid gray"}
                py={4}
                px={4}
                _focusVisible={{ borderColor: "main.500" }}
              />
              <span
                className="absolute right-2 top-[6px] cursor-pointer hover:bg-white hover:text-black rounded-full p-1 transition-all"
                onClick={togglePass}
              >
                {passHidden ? (
                  <IoEyeOffOutline size={16} />
                ) : (
                  <IoEye size={16} />
                )}
              </span>
            </Box>
          </Box>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md border border-white/60  px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-white/10 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-300"
            >
              Login
            </button>
          </div>
        </Form>
      </Flex>
    </Container>
  );
};

export default Login;
