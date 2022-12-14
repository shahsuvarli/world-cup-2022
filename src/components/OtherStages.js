import React, { useContext } from "react";
import MatchCard from "./MatchCard";
import "../styles/App.css";
import { GameContext } from "../context/GameContextProvider";

function OtherStages() {
  const { games } = useContext(GameContext);

  return (
    <div className="cards-container">
      {games?.map((game, index) => (
        <MatchCard game={game} key={index} />
      ))}
    </div>
  );
}

export default OtherStages;
