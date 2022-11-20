import React, { useContext } from "react";
import { GameContext } from "../context/GameContextProvider";
import "../styles/modal.css";

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
          return <div className="match" key={index}>{game.p1.name} - {game.p1r} {game.p2r} - {game.p2.name}</div>;
        })}
      </div>
    </div>
  );
}

export default Modal;
