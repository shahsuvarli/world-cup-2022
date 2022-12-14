import React, { useContext } from "react";
import "../styles/groups.css";
import { GameContext } from "../context/GameContextProvider";

function GroupStage() {
  const { setGames, setOpen, groups } = useContext(GameContext);

  const handleGames = (index) => {
    setGames(groups.groups[index].games);
    setOpen(true);
  };

  return (
    <div className="groups-container">
      {groups.groups.map((group, index) => (
        <div
          key={index}
          className="group-container"
          onClick={() => handleGames(index)}
        >
          <span className="group-name">{group.name}</span>
          <div className="countries-container">
            {group.countries?.map((country, index) => {
              return (
                <div
                  key={index}
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
      ))}
    </div>
  );
}

export default GroupStage;
