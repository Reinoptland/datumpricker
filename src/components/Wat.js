import React, { useState } from "react";

export default function Wat() {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div>
      <h3>Wat</h3>
      <div>
        <label>Titel</label>
        <input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>
      <div>
        <label>Omschrijving</label>
        <input
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </div>
      <div>
        <label>Soort datumprikker</label>
        <select value={type} onChange={(event) => setType(event.target.value)}>
          <option>Datum prikken</option>
          <option>Aanwezigheid</option>
          <option>Iets anders</option>
        </select>
      </div>
    </div>
  );
}
