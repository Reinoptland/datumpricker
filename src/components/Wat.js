import { useDatePicker } from "../contexts/DatePickerProvider";

export default function Wat(props) {
  // const { title, setTitle, description, setDescription, type, setType } = props;
  const { title, setTitle, description, setDescription, type, setType } =
    useDatePicker();
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
