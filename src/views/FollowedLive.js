import { useEffect, useState } from "react";
import moment from "moment";
import api from "../api";
import LiveStreamCard from "../components/LiveStreamCard";
import { Flex } from "@chakra-ui/react";

const FollowedLive = () => {
  const [followedLiveStreams, setFollowedLiveStreams] = useState([]);
  useEffect(() => {
    var userId;
    const getUserId = async () => {
      const result = await api.get("https://api.twitch.tv/helix/users");
      userId = result.data.data[0].id;
    };

    const getFollowedLiveStreams = async () => {
      await getUserId();
      const result = await api.get(
        `https://api.twitch.tv/helix/streams/followed?user_id=${userId}`
      );
      setFollowedLiveStreams(result.data.data);
    };

    getFollowedLiveStreams();

    document.title = "Followed Live Streams";
  }, []);

  var thumbnailUrlPre = "https://static-cdn.jtvnw.net/previews-ttv/live_user_";
  var thumbnailUrlPost = "-286x206.jpg";

  return (
    <Flex flexWrap="wrap" gap={10} mt={4} justify="center">
      {followedLiveStreams.map((followedLiveStream) => (
        <LiveStreamCard
          thumbnail={
            thumbnailUrlPre + followedLiveStream.user_login + thumbnailUrlPost
          }
          streamer={followedLiveStream.user_name}
          uptime={moment(followedLiveStream.started_at).fromNow()}
          game={followedLiveStream.game_name}
          viewer_count={followedLiveStream.viewer_count}
          streamer_username={followedLiveStream.user_login}
          title={followedLiveStream.title}
          key={Math.random() * 1000}
        />
      ))}
    </Flex>
  );
};

export default FollowedLive;
