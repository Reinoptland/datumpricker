import React, { useState } from "react";

export default function Waar() {
  const [locatie, setLocatie] = useState("");
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
