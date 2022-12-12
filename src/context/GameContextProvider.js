import React, { createContext, useState } from "react";
import source from "../assets/data/games.json";

export const GameContext = createContext();

function GameContextProvider({ children }) {
  const [id, setId] = useState("none");
  const [data, setData] = useState(source);
  const [games, setGames] = useState();
  const [open, setOpen] = useState(false);
  const [groups, setGroups] = useState(data[0]);

  return (
    <GameContext.Provider
      value={{
        games,
        setGames,
        id,
        setId,
        data,
        setData,
        open,
        setOpen,
        groups,
        setGroups,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export default GameContextProvider;
