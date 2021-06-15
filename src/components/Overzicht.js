import React from "react";
import { useDatePicker } from "../contexts/DatePickerProvider";

export default function Overzicht() {
  const { handleSubmit, watch } = useDatePicker();

  const { type, title, description, locatie } = watch();

  //   console.log(watchAllFields);

  function onSubmit(data) {
    console.log("ALLE DATA?", data);
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>{type}</p>
        <p>{title}</p>
        <p>{description}</p>
        <p>{locatie}</p>
        <input type="submit" />
      </form>
    </div>
  );
}
