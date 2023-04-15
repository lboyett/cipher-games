import { Routes, Route } from "react-router-dom";

import "./App.css";
import ColorLock from "./pages/color-lock/ColorLock";
import Games from "./pages/games/Games";
import Home from "./pages/home/Home";
import NewGameSettings from "./pages/new-game-settings/NewGameSettings";
import NewGame from "./pages/new-game/NewGame";
import TextLock from "./pages/text-lock/TextLock";

export default function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/new-game" element={<NewGame />} />
        <Route path="/color-lock" element={<ColorLock />} />
        <Route path="/text-lock" element={<TextLock />} />
        <Route path="/new-game-settings" element={<NewGameSettings />} />
      </Routes>
    </div>
  );
}
