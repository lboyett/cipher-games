import { useNavigate } from "react-router-dom";

import logo from "../../assets/logo.png";
import "./home.scss";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="home-page">
      <img src={logo} />
      <div className="button-div">
        <button
          className="login-button"
          onClick={() => {
            navigate("/games");
          }}
        >
          Login
        </button>
        <button className="signup-button">Sign up</button>
      </div>
    </div>
  );
}
