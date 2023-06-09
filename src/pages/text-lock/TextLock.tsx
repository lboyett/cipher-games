import { useEffect, useState } from "react";
import { faCirclePlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import uniqid from "uniqid";

import "./text-lock.scss";
import CancelButton from "../../components/back-button/BackButton";
import ContinueButton from "../../components/continue-button/ContinueButton";

export default function TextLock() {
  const initialChars = ["A", "B", "C", "D", "E"];
  const [chars, setChars] = useState<string[]>(initialChars);
  const [addButtonDisplay, setAddButtonDisplay] = useState<string>("inline");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>, i: number) {
    const regex = new RegExp(/[A-Za-z0-9]+/);
    if (!regex.test(e.target.value)) {
      e.target.value = "";
      return;
    }
    const char = e.target.value.toUpperCase();
    e.target.value = char;
    chars[i] = char;
    setChars([...chars]);
  }

  function addNewText() {
    chars.push("A");
    setChars([...chars]);
  }

  function removeText(i: number) {
    chars.splice(i, 1);
    setChars([...chars]);
  }

  useEffect(() => {
    if (chars.length > 9) {
      setAddButtonDisplay("none");
      console.log("h");
    } else {
      setAddButtonDisplay("inline");
    }
  }, [chars]);

  return (
    <div className="text-lock-page">
      <h1>Text / Number Lock</h1>
      <div className="content">
        <div className="inputs">
          {chars.map((char, i) => {
            return (
              <div key={uniqid()} className="input-div">
                <FontAwesomeIcon
                  icon={faXmark}
                  className="remove-icon"
                  onClick={() => removeText(i)}
                />
                <input
                  minLength={1}
                  maxLength={1}
                  defaultValue={char}
                  onChange={(e) => handleChange(e, i)}
                />
              </div>
            );
          })}
        </div>
        <FontAwesomeIcon
          icon={faCirclePlus}
          size="3x"
          className="icon"
          onClick={() => {
            addNewText();
          }}
          style={{ display: addButtonDisplay }}
        />
        <ContinueButton navigate={"/new-game-settings"} type="text" />
        <CancelButton />
      </div>
    </div>
  );
}
