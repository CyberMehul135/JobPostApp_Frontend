export default function Input({
  id,
  name,
  label,
  type = "text",
  value,
  handleChange,
  placeholder,
}) {
  return (
    <div className="mb-3">
      {label && (
        <label htmlFor={id} className="form-label">
          {label}:
        </label>
      )}
      <input
        className="form-control"
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        required
      />
    </div>
  );
}
