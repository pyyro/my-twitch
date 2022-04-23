const LiveStreamCard = ({
  thumbnail,
  streamer,
  uptime,
  game,
  title,
  viewer_count,
  streamer_username,
}) => {
  return (
    <div className="livestreamcard">
      <div className="card" style={{ width: "18rem" }}>
        <a href={"https://twitch.tv/" + streamer_username} target="_blank">
        <img src={thumbnail} className="card-img-top"></img>
        </a>
        <div className="card-body">
          <h3>{streamer}</h3>
          <h4>{game}</h4> <br></br>
          <span>{title}</span> <br></br>
          <span>{viewer_count}</span> <br></br>
          <span>{uptime}</span>
        </div>
      </div>
    </div>
  );
};

export default LiveStreamCard;
