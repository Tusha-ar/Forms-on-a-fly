export const File = ({
  label = "",
  name = "",
  type = "file",
  css = {},
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
        {...register(name, { ...validation })}
      />
      <span className="text-danger">
        {errors[name] && <span>Select a valid file for {label}</span>}
      </span>
    </div>
  );
};
