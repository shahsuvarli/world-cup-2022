import React, { useContext } from "react";
import { GameContext } from "../context/GameContextProvider";
import "../styles/modal.css";
import { FaPlay } from "react-icons/fa";

function Modal() {
  const { games, setGames } = useContext(GameContext);

  const hideModal = () => {
    setGames([]);
  };

  return (
    <div
      className={`modal ${games.length ? "show" : "hide"}`}
      onClick={hideModal}
    >
      <div className="modal-games-container">
        {games.map((game, index) => {
          return (
            <div className="match-container" key={index}>
              <div className="match-main">
                <div className="country-name">
                  <span>
                    <img
                      src={`https://raw.githubusercontent.com/hampusborgos/country-flags/ba2cf4101bf029d2ada26da2f95121de74581a4d/svg/${game.p1.code}.svg`}
                      alt={game.p1.name}
                    />
                    {game.p1.name}
                  </span>
                  <span>-</span>
                  <span>{game.p1r}</span>
                </div>
                <div className="score">
                  <span>
                    <img
                      src={`https://raw.githubusercontent.com/hampusborgos/country-flags/ba2cf4101bf029d2ada26da2f95121de74581a4d/svg/${game.p2.code}.svg`}
                      alt={game.p2.name}
                    />
                    {game.p2.name}
                  </span>
                  <span>-</span>
                  <span>{game.p2r}</span>
                </div>
              </div>
              <div className="match-media">
                {game.completed ? (
                  <a href={game.link}>
                    <FaPlay size={35} />
                  </a>
                ) : (
                  game.datetime
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Modal;
