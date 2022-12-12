import React from "react";
import { FaPlay } from "react-icons/fa";

function MatchCard({ game }) {
  return (
    <div className="match-container">
      <div className="match-main">
        <div className="country-name">
          <span>
            <img
              src={`https://raw.githubusercontent.com/hampusborgos/country-flags/ba2cf4101bf029d2ada26da2f95121de74581a4d/svg/${game.p1?.code}.svg`}
              alt={game.p1?.name}
            />
            {game.p1?.name}
          </span>
          {game.completed && <span>-</span>}
          <span>{game.p1r}</span>
        </div>
        <div className="score">
          <span>
            <img
              src={`https://raw.githubusercontent.com/hampusborgos/country-flags/ba2cf4101bf029d2ada26da2f95121de74581a4d/svg/${game.p2?.code}.svg`}
              alt={game.p2?.name}
            />
            {game.p2?.name}
          </span>
          {game.completed && <span>-</span>}
          <span>{game.p2r}</span>
        </div>
      </div>
      <div className="match-media">
        {game.completed ? (
          <a target="_blank" rel="noreferrer" href={game.link}>
            <FaPlay size={35} />
          </a>
        ) : (
          <p>{game.datetime}</p>
        )}
      </div>
    </div>
  );
}

export default MatchCard;
