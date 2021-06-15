import { useDatePicker } from "../contexts/DatePickerProvider";

export default function Waar() {
  const { register } = useDatePicker();
  return (
    <div>
      <h3>Waar</h3>
      <label>Locatie</label>
      <input {...register("locatie")} />
    </div>
  );
}
