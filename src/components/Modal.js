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
                  <span>{game.p1.name}</span>
                  <span>{game.p1r}</span>
                </div>
                <div className="score">
                  <span>{game.p2.name}</span>
                  <span>{game.p2r}</span>
                </div>
              </div>
              <div className="match-media">
                <a href={game.link}>
                  <FaPlay size={35} />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Modal;
