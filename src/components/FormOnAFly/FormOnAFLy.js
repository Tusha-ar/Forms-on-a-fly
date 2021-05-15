import { useForm } from "react-hook-form";
import { HandleForms } from "../HandleForms";

export const FormOnAFly = ({ children, onSubmit }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="d-flex flex-column align-items-center"
      >
        <HandleForms children={children} register={register} errors={errors} />
        <button type="submit" className="btn btn-primary btn-lg">
          submit
        </button>
      </form>
    </div>
  );
};
