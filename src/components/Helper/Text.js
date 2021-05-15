export const Text = ({
  label = "",
  name = "",
  type = "text",
  defaultValue = "",
  placeholder = "",
  css ={},
  validation,
  register,
  errors,
}) => {
  return (
    <div className="input d-flex flex-column py-2">
      <label className="form-label">{label}</label>
      <input
        style={css}
        className="form-control"
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
        {...register(name, { ...validation })}
      />
      <span className="text-danger">
        {errors[name] && <span>Enter a valid value for {label}</span>}
      </span>
    </div>
  );
};
