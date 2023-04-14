import { Button } from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import PinInput from "react-pin-input";

import "./new-game-settings.scss";

export default function NewGameSettings() {
  const [pin, setPin] = useState<string>("");
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  const pinComponentStyle = {
    display: "flex",
    justifyContent: "space-between",
  };
  const inputStyle = {
    background: "white",
    border: "none",
    margin: "0 !important",
    fontSize: "2rem",
    fontWeight: "600",
  };
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name of Game</label>
      <input type="text" {...register("name")} />
      <label>Admin Pin</label>
      <PinInput
        length={4}
        inputStyle={inputStyle}
        style={pinComponentStyle}
        onChange={(pin) => {
          setPin(pin);
          setValue("pin", pin);
        }}
      />
      <input value={pin} minLength={4} type="hidden" {...register("pin")} />
      <Button type="submit">Create New Game</Button>
    </form>
  );
}
