import { Button } from "@chakra-ui/react";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import PinInput from "react-pin-input";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import BackButton from "../../components/back-button/BackButton";
import "./new-game-settings.scss";
import { mockGamesData, GameType } from "../../data/mock-games";

export default function NewGameSettings() {
  const [pin, setPin] = useState<string>("");
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    setError,
    formState: { errors },
  } = useForm<GameType>();

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
  const onSubmit: SubmitHandler<GameType> = (data) => {
    mockGamesData.addGame = data;
    console.log(mockGamesData.getGames);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="new-game-form">
      <input
        type="text"
        placeholder="New Game"
        {...register("name", { required: true })}
      />
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
      <input value={"color"} type="hidden" {...register("type")} />
      <Button type="submit" className="create-button">
        Create
        <FontAwesomeIcon icon={faRightLong} />
      </Button>
      <BackButton />
    </form>
  );
}
