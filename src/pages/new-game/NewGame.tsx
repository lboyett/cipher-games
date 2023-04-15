import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboard,
  faPalette,
  faFont,
} from "@fortawesome/free-solid-svg-icons";

import "./new-game.scss";
import BackButton from "../../components/back-button/BackButton";
import { useNavigate } from "react-router-dom";

export default function NewGame() {
  const navigate = useNavigate();
  return (
    <div className="new-game-page">
      <div className="header-div">
        <h1>Choose Game Type</h1>
      </div>
      <ul>
        <li onClick={() => navigate("/color-lock")}>
          <h2>Color</h2>
          <FontAwesomeIcon icon={faPalette} />
        </li>
        <li onClick={() => navigate("/text-lock")}>
          <h2>Text / Number</h2>
          <FontAwesomeIcon icon={faFont} />
        </li>
        <li>
          <h2>Custom</h2>
          <FontAwesomeIcon icon={faClipboard} />
        </li>
        <BackButton />
      </ul>
    </div>
  );
}
