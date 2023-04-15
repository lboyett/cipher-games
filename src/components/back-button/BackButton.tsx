import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

import "./back-button.scss";

export default function BackButton() {
  const navigate = useNavigate();
  return (
    <button className="back-button" onClick={() => navigate(-1)}>
      <FontAwesomeIcon icon={faLeftLong} />
      <h3>Back</h3>
    </button>
  );
}
