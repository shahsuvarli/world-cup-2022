import React, { useContext } from "react";
import MatchCard from "./MatchCard";
import "../styles/App.css";
import { GameContext } from "../context/GameContextProvider";

function Stages() {
  const { games } = useContext(GameContext);
  // console.log('games',games || 'cdw')

  return (
    <div className="cards-container">
      {games.length ||
        games.map(
          (game, index) => <div>{game}</div>
          // <MatchCard game={game} key={index} />
        )}
    </div>
  );
}

export default Stages;
