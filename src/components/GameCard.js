import { Link } from "react-router-dom";

const GameCard = ({game_thumbnail, game_id, game_name, }) => {
    return ( 
        <div className="gamecard">
        <div className="card" style={{ width: "18rem", }}>
          <Link to={`/allgames/${game_name}?id=${game_id}`}>
          <img src={game_thumbnail} className="card-img-top"></img>
          </Link>
          <div className="card-body">
            <h3>{game_name}</h3>
          </div>
        </div>
      </div>
     );
}
 
export default GameCard;