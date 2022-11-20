import React, { createContext, useState } from "react";

export const GameContext = createContext();

function GameContextProvider({ children }) {
  const [games, setGames] = useState([]);

  return (
    <GameContext.Provider value={{ games, setGames }}>
      {children}
    </GameContext.Provider>
  );
}

export default GameContextProvider;
