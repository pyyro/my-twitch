import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LiveStreamCard from "../components/LiveStreamCard";
import api from "../api";
import moment from "moment";
import { Box, Flex, Text } from "@chakra-ui/react";
import DarkModeContext from "../contexts/DarkModeContext";
import { useContext } from "react";

const TopStreamsForGame = () => {
  const { darkMode } = useContext(DarkModeContext);
  const query = new URLSearchParams(window.location.search);
  const id = query.get("id");
  const params = useParams();
  const [topLiveStreamsForGame, setTopLiveStreamForGame] = useState([]);

  useEffect(() => {
    const getTopLiveStreamsForGame = async () => {
      const result = await api.get(
        `https://api.twitch.tv/helix/streams?game_id=${id}`
      );
      setTopLiveStreamForGame(result.data.data);
    };

    getTopLiveStreamsForGame();
    document.title = `${params.gamename} Top Live Streams`;
  }, []);

  var thumbnailUrlPre = "https://static-cdn.jtvnw.net/previews-ttv/live_user_";
  var thumbnailUrlPost = "-286x206.jpg";

  return (
    <Box>
      <Text fontSize="2xl" align="center" color={darkMode ? "white" : "black"}>
        Top 20 live streams for {params.gamename}
      </Text>
      <Flex flexWrap="wrap" gap={10} mt={4} justify="center">
        {topLiveStreamsForGame.map((topLiveStreamForGame) => (
          <LiveStreamCard
            thumbnail={
              thumbnailUrlPre +
              topLiveStreamForGame.user_login +
              thumbnailUrlPost
            }
            streamer={topLiveStreamForGame.user_name}
            uptime={moment(topLiveStreamForGame.started_at).fromNow()}
            game={topLiveStreamForGame.game_name}
            viewer_count={topLiveStreamForGame.viewer_count}
            streamer_username={topLiveStreamForGame.user_login}
            title={topLiveStreamForGame.title}
            key={Math.random() * 1000}
          />
        ))}
      </Flex>
    </Box>
  );
};

export default TopStreamsForGame;
