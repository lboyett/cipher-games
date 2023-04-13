import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboard,
  faPalette,
  faFont,
} from "@fortawesome/free-solid-svg-icons";

import "./new-game.scss";

export default function NewGame() {
  return (
    <div className="new-game-page">
      <div className="header-div">
        <h1>Choose Game Type</h1>
      </div>
      <ul>
        <li>
          <h2>Color</h2>
          <FontAwesomeIcon icon={faPalette} />
        </li>
        <li>
          <h2>Text / Number</h2>
          <FontAwesomeIcon icon={faFont} />
        </li>
        <li>
          <h2>Custom</h2>
          <FontAwesomeIcon icon={faClipboard} />
        </li>
      </ul>
    </div>
  );
}
