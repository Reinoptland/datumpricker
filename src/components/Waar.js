import React, { useContext } from "react";
import { datePickerContext } from "../contexts/DatePickerProvider";

export default function Waar() {
  // const { locatie, setLocatie } = props;
  // haal alle waardes uit de context
  // const watIsDit = useContext(datePickerContext);
  // console.log("WAT KRIJGEN WE NU:", watIsDit);
  const { locatie, setLocatie } = useContext(datePickerContext);
  return (
    <div>
      <h3>Waar</h3>
      <label>Locatie</label>
      <input
        value={locatie}
        onChange={(event) => setLocatie(event.target.value)}
      />
    </div>
  );
}
