import React, { useState } from "react";

export default function Waar(props) {
  const { locatie, setLocatie } = props;
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
