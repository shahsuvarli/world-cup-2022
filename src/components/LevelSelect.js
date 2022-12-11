import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { Select } from "@mui/material";
import { GameContext } from "../context/GameContextProvider";

export default function LevelSelect() {
  const { id, setId, data, setGames } = React.useContext(GameContext);

  const handleChange = (event) => {
    setId(event.target.value);
  };

  React.useEffect(() => {
    if (id === "none") {
    } else if (id === 0) {
      setGames(data[id].groups);
    } else {
      setGames(data[id].games);
    }
  }, [id, data, setGames]);

  return (
    <Box sx={{ maxWidth: 420, width: "80%" }}>
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={id}
          sx={{ borderRadius: 10, color: "#fff", background: "#fff" }}
          onChange={handleChange}
        >
          <MenuItem value="none" disabled>
            Select
          </MenuItem>
          {data.map((stage) => (
            <MenuItem value={stage.id} key={stage.id}>
              {stage.stage}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
