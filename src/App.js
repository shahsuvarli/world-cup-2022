import GameContextProvider from "./context/GameContextProvider";
import Modal from "./components/Modal";
import LevelSelect from "./components/LevelSelect";
import Body from "./components/Body";

function App() {
  return (
    <GameContextProvider>
      <div className="main">
        <h1>World Cup Qatar 2022</h1>
        <p>(click on cards to check match details)</p>
        <LevelSelect />
        <Body />
        <Modal />
      </div>
    </GameContextProvider>
  );
}
export default App;
