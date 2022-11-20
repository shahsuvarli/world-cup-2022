import groups from "../assets/groups.json";
import React from "react";
import "../styles/groups.css";

function JoinTables() {
  return (
    <div className="groups-container">
      {groups.map((group) => {
        return (
          <div key={group.name} className="group-container">
            {/* <p className="group-name">{group.name}</p> */}
            <div className="countries-container">
              {group.countries.map((country) => {
                return (
                  <div key={country.name} className="country-container">
                    <img
                      src={`https://raw.githubusercontent.com/hampusborgos/country-flags/ba2cf4101bf029d2ada26da2f95121de74581a4d/svg/${country.code}.svg`}
                      alt={country.name}
                    />
                    {/* <span>{country.name} (2)</span> */}
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

export default JoinTables;
