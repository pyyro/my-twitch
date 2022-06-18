import { useState, useEffect } from "react";
import moment from "moment";
import api from "../api";
import LiveStreamCard from "../components/LiveStreamCard";

const TopStreams = () => {
  const [topLiveStreams, setTopLiveStreams] = useState([]);

  useEffect(() => {
    const getTopLiveStreams = async () => {
      const result = await api.get("https://api.twitch.tv/helix/streams/");
      setTopLiveStreams(result.data.data);
    };

    getTopLiveStreams();
    document.title = "Top Live Streams";
  }, []);

  var thumbnailUrlPre = "https://static-cdn.jtvnw.net/previews-ttv/live_user_";
  var thumbnailUrlPost = "-286x206.jpg";
  return (
    <div className="livestreams-container">
      {topLiveStreams.map((topLiveStream) => (
        <LiveStreamCard
          thumbnail={
            thumbnailUrlPre + topLiveStream.user_login + thumbnailUrlPost
          }
          streamer={topLiveStream.user_name}
          uptime={moment(topLiveStream.started_at).fromNow()}
          game={topLiveStream.game_name}
          viewer_count={topLiveStream.viewer_count}
          streamer_username={topLiveStream.user_login}
          title={topLiveStream.title}
          key={Math.random() * 1000}
        />
      ))}
    </div>
  );
};

export default TopStreams;
