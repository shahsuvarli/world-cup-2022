import React, { useContext } from "react";
import { GameContext } from "../context/GameContextProvider";
import GroupStage from "./GroupStage";
import Home from "./Home";
import OtherStages from "./OtherStages";

function Body() {
  const { id } = useContext(GameContext);

  function renderPage() {
    switch (id) {
      case "none":
        return <Home />;
      case 0:
        return <GroupStage />;
      default:
        return <OtherStages />;
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
