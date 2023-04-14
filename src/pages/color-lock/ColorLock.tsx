import { useState, useEffect } from "react";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./color-lock.scss";
import ColorPicker from "./ColorPicker/ColorPicker";
import CancelButton from "../../components/cancel-button/CancelButton";
import ContinueButton from "../../components/continue-button/ContinueButton";

export default function ColorLock() {
  const initialColors = ["#FF0000", "#00FF00", "#0000FF"];
  const [colors, setColors] = useState<string[]>(initialColors);
  const [addButtonDisplay, setAddButtonDisplay] = useState<string>("auto");

  function addNewColor() {
    colors.push("#FF0000");
    setColors([...colors]);
  }

  function changeColor(color: string, i: number) {
    colors[i] = color;
    setColors([...colors]);
  }

  function removeColor(i: number) {
    colors.splice(i, 1);
    setColors([...colors]);
  }

  useEffect(() => {
    if (colors.length >= 5) {
      setAddButtonDisplay("none");
    } else {
      setAddButtonDisplay("inline");
    }
  }, [colors]);

  return (
    <div className="color-lock-page">
      <h1>Color Lock</h1>
      <ol>
        {colors.map((color, i) => {
          return (
            <ColorPicker
              i={i}
              color={color}
              key={i}
              changeColor={(color: string) => changeColor(color, i)}
              removeColor={(i: number) => removeColor(i)}
            />
          );
        })}
        <FontAwesomeIcon
          icon={faCirclePlus}
          size="3x"
          className="icon"
          style={{ display: addButtonDisplay }}
          onClick={() => {
            addNewColor();
          }}
        />
        <ContinueButton navigate={"/new-game-settings"} />
        <CancelButton />
      </ol>
    </div>
  );
}
