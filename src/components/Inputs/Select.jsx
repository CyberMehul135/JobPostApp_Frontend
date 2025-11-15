export default function Select({
  id,
  name,
  label,
  value,
  handleChange,
  options,
  defaultOption,
}) {
  return (
    <div className="my-3">
      <label htmlFor={id} className="mb-2">
        {label}:{" "}
      </label>
      <select
        className="form-select"
        name={name}
        id={id}
        value={value}
        onChange={handleChange}
        required
      >
        <option value="" disabled>
          {defaultOption}
        </option>
        {options?.map((option, i) => (
          <option key={i} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
