import React, { useContext } from "react";
import { GameContext } from "../context/GameContextProvider";
import "../styles/modal.css";
import MatchCard from "./MatchCard";

function Modal() {
  const { games, open, setOpen } = useContext(GameContext);

  const hideModal = () => {
    setOpen(false);
  };

  return (
    <div className={`modal ${open ? "show" : "hide"}`} onClick={hideModal}>
      <div className="modal-games-container">
        {games?.map((game, index) => {
          return <MatchCard game={game} key={index} />;
        })}
      </div>
    </div>
  );
}

export default Modal;
