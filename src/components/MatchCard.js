import React from "react";
import { FaPlay } from "react-icons/fa";
import PropTypes from "prop-types";

function MatchCard({ game }) {
  return (
    <div className="match-container">
      <div className="match-main">
        <div className="country-name">
          <span>
            <img
              src={`https://flagicons.lipis.dev/flags/4x3/${game.p1?.code}.svg`}
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
              src={`https://flagicons.lipis.dev/flags/4x3/${game.p2?.code}.svg`}
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

MatchCard.propTypes = {
  game: PropTypes.object,
};
