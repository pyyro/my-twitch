import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LiveStreamCard from "../components/LiveStreamCard";
import api from "../api";
import moment from "moment";

const TopStreamsForGame = () => {
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
    <>
     <div style={{textAlign: "center"}}>
      <span>Top 20 live streams for {params.gamename}</span>
      </div>
      <div className="livestreams-container">
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
      </div>
    </>
  );
};

export default TopStreamsForGame;
