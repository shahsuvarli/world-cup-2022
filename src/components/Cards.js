import groups from "../assets/groups.json";
import React, { useContext } from "react";
import "../styles/groups.css";
import { GameContext } from "../context/GameContextProvider";

function Cards() {
  const { setGames } = useContext(GameContext);

  const handleGames = (games) => {
    setGames(games);
    // console.log(group.games)
  };

  return (
    <div className="groups-container">
      {groups.map((group) => {
        return (
          <div
            key={group.name}
            className="group-container"
            onClick={() => handleGames(group.games)}
          >
            <span className="group-name">{group.name}</span>
            <div className="countries-container">
              {group.countries.map((country, index) => {
                return (
                  <div
                    key={country.name}
                    className="country-container"
                    id={`id-${index}`}
                  >
                    <img
                      src={`https://raw.githubusercontent.com/hampusborgos/country-flags/ba2cf4101bf029d2ada26da2f95121de74581a4d/svg/${country.code}.svg`}
                      alt={country.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
