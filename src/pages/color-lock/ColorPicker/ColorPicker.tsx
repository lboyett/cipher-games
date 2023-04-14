import uniqid from "uniqid";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Button,
  ModalCloseButton,
} from "@chakra-ui/react";
import { ChromePicker } from "react-color";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import "./color-picker.scss";
import { useState } from "react";

interface ColorPickerProps {
  color: string;
  i: number;
  changeColor: Function;
}

export default function ColorPicker({
  color,
  i,
  changeColor,
}: ColorPickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  function setColor(color: string) {
    changeColor(color);
  }

  return (
    <li key={uniqid()} className="color-picker-li">
      <FontAwesomeIcon icon={faXmark} size="2xs" onClick={() => {}} />
      <div
        className="color-div"
        style={{ background: `${color}` }}
        onClick={() => {
          setIsOpen(true);
        }}
      />
      <ChakraModal
        isOpen={isOpen}
        setIsOpen={() => {
          setIsOpen(!isOpen);
        }}
        setColor={(color: string) => setColor(color)}
        initialColor={color}
      />
      <h2
        onClick={() => {
          setIsOpen(true);
        }}
      >{`${color}`}</h2>
    </li>
  );
}

interface ChakraModalProps {
  isOpen: boolean;
  setIsOpen: Function;
  setColor: Function;
  initialColor: string;
}

export function ChakraModal(props: ChakraModalProps) {
  const [color, setColor] = useState("");

  return (
    <Modal
      isOpen={props.isOpen}
      onClose={() => {
        props.setIsOpen();
      }}
    >
      <ModalOverlay
        backdropFilter="auto"
        backdropInvert="20%"
        backdropBlur="3px"
      />
      <ModalContent
        className="modal"
        width="sm"
        display="flex"
        flexDir="column"
        alignItems="center"
        padding="1rem"
        gap="1rem"
        bg={color ? color : props.initialColor}
      >
        <ModalBody>
          <ChromePicker
            color={color ? color : props.initialColor}
            onChange={(color) => setColor(color.hex)}
            disableAlpha={true}
            className="chrome-picker"
          />
        </ModalBody>
        <Button
          bg={"white"}
          color={"black"}
          onClick={() => {
            props.setIsOpen();
            if (!color) props.setColor(props.initialColor);
            else props.setColor(color.toUpperCase());
          }}
        >
          Choose
        </Button>
        <ModalCloseButton bg={"white"} color="black" />
      </ModalContent>
    </Modal>
  );
}
