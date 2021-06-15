import { useDatePicker } from "../contexts/DatePickerProvider";

export default function Waar() {
  const { locatie, setLocatie } = useDatePicker();
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
