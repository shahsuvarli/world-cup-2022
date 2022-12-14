import { GameContext } from "./context/GameContextProvider";
import Modal from "./components/Modal";
import StageSelect from "./components/StageSelect";
import Body from "./components/Body";
import { useContext } from "react";

function App() {
  const { id } = useContext(GameContext);
  return (
    <div className={id === "none" ? "home" : "main"}>
      <h1>World Cup Qatar 2022</h1>
      {id === 0 ? <p>(click on cards to see group games)</p> : ""}
      <StageSelect />
      <Body />
      <Modal />
    </div>
  );
}
export default App;
