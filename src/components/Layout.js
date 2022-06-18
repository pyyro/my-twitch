import { Box } from "@chakra-ui/react";
import Navbar from "./Navbar";
import { useContext } from "react";
import DarkModeContext from "../contexts/DarkModeContext";
import "@fontsource/cabin";

const Layout = ({ children, user, setUser }) => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <Box bg={darkMode ? "#0B0C0E" : "#DEE0E3"} fontFamily="Cabin, sans-serif">
      <Navbar user={user} setUser={setUser} />

      {children}
    </Box>
  );
};

export default Layout;
