import { GameContext } from "./context/GameContextProvider";
import Modal from "./components/Modal";
import LevelSelect from "./components/LevelSelect";
import Body from "./components/Body";
import { useContext } from "react";

function App() {
  const { id } = useContext(GameContext);
  return (
    <div className="main home">
      <h1>World Cup Qatar 2022</h1>
      <p>(click on cards to check match details)</p>
      <LevelSelect />
      <Body />
      <Modal />
    </div>
  );
}
export default App;
