import {
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useContext } from "react";
import DarkModeContext from "../contexts/DarkModeContext";

const Navbar = ({ user, setUser }) => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const logOutHandler = () => {
    window.localStorage.removeItem("access_token");
    setUser(false);
  };

  return (
    <Flex
      bg={darkMode ? "#252831" : "#FFFFFE"}
      justify="space-between"
      p={2}
      color={darkMode ? "white" : "black"}
      boxShadow="md"
    >
      <Link to="/">
        <Text fontSize="3xl">My Twitch</Text>
      </Link>
      <Flex gap={8}>
        <Link to="/followedlive">
          <Text fontSize="2xl" _hover={{ color: "blue.500" }}>
            Followed live streams
          </Text>
        </Link>

        <Link to="/topstreams">
          <Text fontSize="2xl" _hover={{ color: "blue.500" }}>
            Top live streams
          </Text>
        </Link>

        <Link to="/allgames">
          <Text fontSize="2xl" _hover={{ color: "blue.500" }}>
            Top games
          </Text>
        </Link>
      </Flex>
      <Flex gap={4}>
        <Button
          onClick={toggleDarkMode}
          colorScheme={darkMode ? "blackAlpha" : "gray"}
        >
          {darkMode ? "Light" : "Dark"} Mode
        </Button>
        {user ? (
          <Menu>
            <MenuButton
              as={Button}
              colorScheme={darkMode ? "blackAlpha" : "gray"}
              rightIcon={<ChevronDownIcon />}
            >
              Account
            </MenuButton>
            <MenuList bg={darkMode ? "#252831" : "gray.100"} border="none">
              <MenuItem
                onClick={logOutHandler}
                _focus={darkMode ? { bg: "#252831" } : { bg: "gray.200" }}
              >
                Logout
              </MenuItem>
            </MenuList>
          </Menu>
        ) : (
          <Box></Box>
        )}
      </Flex>
    </Flex>
  );
};

export default Navbar;
