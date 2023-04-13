import { Routes, Route } from "react-router-dom";

import "./App.css";
import Games from "./pages/games/Games";
import Home from "./pages/home/Home";
import NewGame from "./pages/new-game/NewGame";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/new-game" element={<NewGame />} />
      </Routes>
    </div>
  );
}

export default App;
