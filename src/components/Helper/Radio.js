import { HandleFieldType } from "../HandleFieldType";
import { TitleSec } from "./TitleSec";
import React, { useRef } from "react";
import ReactDOM from "react-dom";
export const Radio = ({
  label = "",
  type = "radio",
  name = "",
  options = [],
  css = {},
  register,
  errors,
  validation,
}) => {
  if (!Array.isArray(options))
    throw new Error(
      `Accepted radio options as Array but got ${typeof options}`
    );

  function handleConditionalRender(items) {
    if (items) {
      ReactDOM.render(
        <HandleFieldType items={items} register={register} errors={errors} />,
        document.getElementById(`conditionalAreaRadio${name}`)
      );
    } else
      ReactDOM.render(null, document.getElementById(`conditionalArea${name}`));
  }

  return (
    <div className="input d-flex flex-column py-2">
      <TitleSec title={label} />
      {options.map((option, index) => (
        <div>
          <div key={index}>
            <input
              style={css}
              type={type}
              name={name}
              id={option.value}
              value={option.value}
              onClick={() => handleConditionalRender(option.showOnSelect)}
              {...register(name, { ...validation })}
            />
            <label for={option.value} className="mx-2 my-1">
              {option.label}
            </label>
          </div>
        </div>
      ))}
      <span className="text-danger">
        {errors[name] && <span>Select a value for {name}</span>}
      </span>
      <div id={`conditionalAreaRadio${name}`} className="py-3"></div>
    </div>
  );
};
