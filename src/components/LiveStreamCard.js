import { Box, Flex, Image, Text } from "@chakra-ui/react";
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
      _hover={darkMode ? {} : { boxShadow: "2xl" }}
      transition="ease"
      transitionDuration="0.15s"
      onClick={handleCardClick}
      borderRadius="5px"
      cursor="pointer"
      color={darkMode ? "white" : ""}
      p={2}
      boxSize="sm"
    >
      <Image src={thumbnail} w="full" h="60%" />
      <Text fontSize="2xl" fontWeight="bold">
        {streamer}
      </Text>
      <Text fontSize="xl">{game}</Text>
      <Text fontSize="md" noOfLines={2}>
        {title}
      </Text>
      <Flex justify="space-between">
        <Text fontSize="xl" as="span">
          {viewer_count} viewers
        </Text>
        <Text fontSize="xl" as="span">
          {uptime}
        </Text>
      </Flex>
    </Box>
  );
};

export default LiveStreamCard;
