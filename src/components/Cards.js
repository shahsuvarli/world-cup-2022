import groups from "../assets/groups.json";
import React from "react";
import "../styles/groups.css";

function Cards() {
  return (
    <div className="groups-container">
      {groups.map((group) => {
        return (
          <div key={group.name} className="group-container">
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
