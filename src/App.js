import Cards from "./components/Cards";
import "./styles//App.css";
import GameContextProvider from "./context/GameContextProvider";
import Modal from "./components/Modal";

function App() {
  return (
    <GameContextProvider>
      <div className="main">
        <h1>WC Qatar 2022</h1>
        <p>(click on cards to check match details)</p>
        <Cards />
        <Modal />
      </div>
    </GameContextProvider>
  );
}
export default App;
