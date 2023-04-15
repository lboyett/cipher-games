import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

import "./continue-button.scss";

interface ContinueButtonProps {
  navigate: string;
  type: string;
}

export default function ContinueButton(props: ContinueButtonProps) {
  const navigate = useNavigate();
  return (
    <button
      className="continue-button"
      onClick={() => navigate(props.navigate, { state: { type: props.type } })}
    >
      <h3>Continue</h3>
      <FontAwesomeIcon icon={faRightLong} />
    </button>
  );
}
