import React, { useContext } from "react";
import { GameContext } from "../context/GameContextProvider";
import Cards from "./Cards";
import Home from "./Home";
import Stages from "./Stages";

function Body() {
  const { id } = useContext(GameContext);

  function renderPage() {
    switch (id) {
      case "none":
        return <Home />;
      case 0:
        return <Cards />;
      // case 3:
      //   return <Stages />;
      default:
        return <Stages />;
    }
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      {renderPage(id)}
    </div>
  );
}

export default Body;
