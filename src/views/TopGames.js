import api from "../api";
import GameCard from "../components/GameCard";
import { useState, useEffect } from "react";
import { Flex } from "@chakra-ui/react";

const TopGames = () => {
  const [topGames, setTopGames] = useState([]);

  useEffect(() => {
    const getTopGames = async () => {
      const result = await api.get("https://api.twitch.tv/helix/games/top");
      setTopGames(result.data.data);
    };

    getTopGames();
    document.title = "Top Games";
  }, []);

  var thumbnailUrlPre = "https://static-cdn.jtvnw.net/ttv-boxart/";
  var thumbnailUrlPost = "-286x206.jpg";

  return (
    <Flex flexWrap="wrap" gap={10} mt={4} justify="center">
      {topGames.map((topGame) => (
        <GameCard
          game_thumbnail={thumbnailUrlPre + topGame.name + thumbnailUrlPost}
          game_name={topGame.name}
          game_id={topGame.id}
          key={Math.random() * 1000}
        />
      ))}
    </Flex>
  );
};

export default TopGames;
