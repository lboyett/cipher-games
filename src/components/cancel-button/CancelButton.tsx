import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

import "./cancel-button.scss";

export default function CancelButton() {
  const navigate = useNavigate();
  return (
    <button className="cancel-button" onClick={() => navigate("/games")}>
      <FontAwesomeIcon icon={faCircleXmark} />
      <h3>Cancel</h3>
    </button>
  );
}
