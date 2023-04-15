import { useEffect, useState } from "react";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./games.scss";
import { mockGamesData } from "../../data/mock-games";
import { useNavigate } from "react-router-dom";

export default function Games() {
  const navigate = useNavigate();
  function assignClassNameToType(type: string) {
    switch (type) {
      case "Color":
        return "color";
        break;
      case "Text / Number":
        return "text-number";
        break;
      case "Custom":
        return "custom";
        break;
    }
  }
  return (
    <div className="games-page">
      <h1>Games</h1>
      <ul className="games-ul">
        {mockGamesData.getGames.map((game) => {
          const typeClassName = assignClassNameToType(game.type);
          return (
            <li key={`${game.name}`} onClick={() => {}}>
              <h2>{game.name}</h2>
              <h3 className={typeClassName}>{game.type}</h3>
            </li>
          );
        })}
      </ul>
      <FontAwesomeIcon
        icon={faCirclePlus}
        size="3x"
        className="icon"
        onClick={() => {
          navigate("/new-game");
        }}
      />
    </div>
  );
}
