import React, { useState, createContext } from "react";

// context is an object
// export de context, zodat je hem elders kan importeren
// gebruik export, niet export default
export const datePickerContext = createContext({});

export default function DatePickerProvider(props) {
  console.log("PROPS in DATEPICKERPROVDER:", props);
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [locatie, setLocatie] = useState("");
  return (
    <datePickerContext.Provider
      value={{
        title: title,
        setTitle: setTitle,
        type: type,
        setType: setType,
        description: description,
        setDescription: setDescription,
        locatie: locatie,
        setLocatie: setLocatie,
      }}
    >
      {/* Hier komt de rest van de app */}
      {props.children}
    </datePickerContext.Provider>
  );
}
