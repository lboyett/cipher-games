import { useState } from "react";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import uniqid from "uniqid";

import "./text-lock.scss";
import CancelButton from "../../components/cancel-button/CancelButton";
import ContinueButton from "../../components/continue-button/ContinueButton";

export default function TextLock() {
  const initialChars = ["A", "B", "C", "D", "E"];
  const [chars, setChars] = useState<string[]>(initialChars);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const regex = new RegExp(/[A-Za-z0-9]+/);
    if (!regex.test(e.target.value)) {
      e.target.value = "";
      return;
    }
    e.target.value = e.target.value.toUpperCase();
  }

  function addNewText() {
    chars.push("A");
    setChars([...chars]);
  }

  return (
    <div className="text-lock-page">
      <h1>Text / Number Lock</h1>
      <div className="content">
        <div className="inputs">
          {chars.map((char, i) => {
            return (
              <input
                key={uniqid()}
                minLength={1}
                maxLength={1}
                defaultValue={char}
                onChange={(e) => handleChange(e)}
              />
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
        />
        <ContinueButton />
        <CancelButton />
      </div>
    </div>
  );
}
