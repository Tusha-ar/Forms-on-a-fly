import { HandleFieldType } from "../HandleFieldType";
import { Title } from "../Helper/Title";
import "bootstrap/dist/css/bootstrap.min.css";

export const HandleForms = ({ children, register, errors }) => {
  if (!Array.isArray(children)) throw new Error("Content should be an Array");

  return children.map((child, index) => (
    <div key={index} className="container inner-form card mb-4">
      <div className="text-center">
        <Title title={child.sectionTitle} />
      </div>
      <HandleFieldType
        errors={errors}
        items={child.items}
        register={register}
      />
    </div>
  ));
};
