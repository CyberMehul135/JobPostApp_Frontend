export default function TetxArea({
  id,
  label,
  name,
  value,
  handleChange,
  placeHolder,
}) {
  return (
    <div className="my-3">
      <label htmlFor={id}>{label}:</label>
      <textarea
        className="form-control"
        id={id}
        name={name}
        placeholder={placeHolder}
        value={value}
        onChange={handleChange}
        required
      ></textarea>
    </div>
  );
}
