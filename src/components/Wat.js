import { useDatePicker } from "../contexts/DatePickerProvider";

export default function Wat(props) {
  // const { title, setTitle, description, setDescription, type, setType } = props;
  const { register } = useDatePicker();
  return (
    <div>
      <h3>Wat</h3>
      <div>
        <label>Titel</label>
        <input {...register("title")} />
      </div>
      <div>
        <label>Omschrijving</label>
        <input {...register("description")} />
      </div>
      <div>
        <label>Soort datumprikker</label>
        <select {...register("type")}>
          <option>Datum prikken</option>
          <option>Aanwezigheid</option>
          <option>Iets anders</option>
        </select>
      </div>
    </div>
  );
}
