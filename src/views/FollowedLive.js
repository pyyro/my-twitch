import { useEffect, useState } from "react";
import moment from "moment";
import api from "../api";
import "../styles/FollowedLive.css";
import LiveStreamCard from "../components/LiveStreamCard";

const FollowedLive = () => {
  const [followedLiveStreams, setFollowedLiveStreams] = useState([]);
  useEffect(() => {
    var userId;
    const getUserId = async() => {
      const result = await api.get("https://api.twitch.tv/helix/users");
       userId = result.data.data[0].id;
       console.log("id fun  ran")
    }

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
    <div className="livestreams-container">
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
    </div>
  );
};

export default FollowedLive;
