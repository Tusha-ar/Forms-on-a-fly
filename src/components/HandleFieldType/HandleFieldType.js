import { Text } from "../Helper/Text";
import { Radio } from "../Helper/Radio";
import { Heading } from "../Helper/Heading";
import { Paragraph } from "../Helper/Paragraph";
import { Line } from "../Helper/Line";
import { TextArea } from "../Helper/Textarea";
import { Checkbox } from "../Helper/Checkbox";
import { File } from "../Helper/File";

export const HandleFieldType = ({ items, register, errors }) => {
  if (!Array.isArray(items))
    throw new Error(`Accepted items as Array but got ${typeof items}`);

  return (
    <div className="row">
      {items.map((column, index) => (
        <div key={index} className="container">
          <div key={index} className="col row">
            {column.map((col, index) => 
            <div className="col" key={index}>
                {col.type === "text" && <Text {...col} errors={errors} register={register} />} 
                {col.type === "radio" && <Radio {...col} errors={errors} register={register}/>}
                {col.type === "textarea" && <TextArea {...col} errors={errors} register={register} />}
                {col.type === "checkbox" && <Checkbox {...col} errors={errors} register={register}/>}
                {col.type === "file" && <File {...col} errors={errors} register={register} />} 
                </div>
            )}
          </div>
          <div className="col row">
            {column.map((col, index) => (
              <div key={index} className="col">
                {col.type === "heading" && <Heading {...col} />}
                {col.type === "paragraph" && <Paragraph {...col} />}
                {col.type === "line" && <Line />}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
