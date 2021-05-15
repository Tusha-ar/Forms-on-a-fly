export const TextArea = ({
  label = "",
  name = "",
  css = {},
  defaultValue = "",
  placeholder = "",
  validation,
  register,
  errors,
}) => {
  return (
    <div className="input d-flex flex-column py-2">
      <label className="form-label">{label}</label>
      <textarea
        style={css}
        className="form-control"
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
