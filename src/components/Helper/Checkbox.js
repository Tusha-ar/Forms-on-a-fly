import { HandleFieldType } from "../HandleFieldType";
import { TitleSec } from "./TitleSec";
import React, { useRef } from "react";
import ReactDOM from "react-dom";
export const Checkbox = ({
  label = "",
  type = "checkbox",
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

  function handleConditionalRender(items, e) {
    if (items) {
      const div = document.createElement("div");
      if (e.target.checked) {
        document
          .getElementById(`conditionalAreaCheckbox${name}`)
          .appendChild(div);
        ReactDOM.render(
          <HandleFieldType items={items} register={register} errors={errors} />,
          div
        );
      } else {
        const parent = document.getElementById(
          `conditionalAreaCheckbox${name}`
        );
        parent.removeChild(parent.lastChild);
      }
    }
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
              onClick={(e) => handleConditionalRender(option.showOnSelect, e)}
              {...register(name, { ...validation })}
            />
            <label className="mx-2 my-1">{option.label}</label>
          </div>
        </div>
      ))}
      <span className="text-danger">
        {errors[name] && <span>Select a value for {name}</span>}
      </span>
      <div id={`conditionalAreaCheckbox${name}`} className="py-3"></div>
    </div>
  );
};
