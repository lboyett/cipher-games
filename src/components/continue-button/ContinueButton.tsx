import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

import "./continue-button.scss";

export default function ContinueButton() {
  const navigate = useNavigate();
  return (
    <button className="continue-button" onClick={() => navigate("/games")}>
      <h3>Continue</h3>
      <FontAwesomeIcon icon={faRightLong} />
    </button>
  );
}
