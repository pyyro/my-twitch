import { Box, Image, Text } from "@chakra-ui/react";
import DarkModeContext from "../contexts/DarkModeContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const GameCard = ({ game_thumbnail, game_id, game_name }) => {
  const { darkMode } = useContext(DarkModeContext);
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate(`/allgames/${game_name}?id=${game_id}`);
  };
  return (
    <Box
      bg={darkMode ? "#252831" : "#FFFFFE"}
      boxShadow="md"
      _hover={darkMode ? {} : { boxShadow: "2xl" }}
      transition="ease"
      transitionDuration="0.15s"
      onClick={handleCardClick}
      borderRadius="5px"
      cursor="pointer"
      color={darkMode ? "white" : ""}
      p={2}
    >
      <Image src={game_thumbnail} />
      <Text align="center">{game_name}</Text>
    </Box>
  );
};

export default GameCard;
