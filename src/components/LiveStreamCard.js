import { Box, Image, Text } from "@chakra-ui/react";
import DarkModeContext from "../contexts/DarkModeContext";
import { useContext } from "react";
const LiveStreamCard = ({
  thumbnail,
  streamer,
  uptime,
  game,
  title,
  viewer_count,
  streamer_username,
}) => {
  const { darkMode } = useContext(DarkModeContext);

  const handleCardClick = () => {
    window.open(`https://twitch.tv/${streamer_username}`, "_blank");
  };
  return (
    <Box
      bg={darkMode ? "#252831" : "#FFFFFE"}
      boxShadow="md"
      _hover={{ boxShadow: "2xl" }}
      transition="ease"
      transitionDuration="0.15s"
      onClick={handleCardClick}
      boxSize="sm"
      borderRadius="5px"
      cursor="pointer"
      color={darkMode ? "white" : ""}
    >
      <Image src={thumbnail} />
      <Text fontSize="xl">{streamer}</Text>
      <Text fontSize="xl">{game}</Text>
      <Text fontSize="xl">{title}</Text>
      <Text fontSize="xl">{viewer_count}</Text>
      <Text fontSize="xl">{uptime}</Text>
    </Box>
  );
};

export default LiveStreamCard;
