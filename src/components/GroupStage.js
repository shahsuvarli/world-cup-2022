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
                    style={{ borderRadius: 5, border: "0.2px solid #891638" }}
                    src={`https://flagicons.lipis.dev/flags/4x3/${country.code}.svg`}
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
