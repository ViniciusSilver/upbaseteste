import { useState } from "react";
import "./input.css";
import "./textarea.css";

export const TextArea = (props) => {
  const [count, setCount] = useState(0);
  const handleChange = (e) => {
    setCount(e.target.value.length);
  };
  return (
    <label htmlFor={props.name}>
      <textarea
        onChange={handleChange}
        name={props.name}
        id={props.id}
        placeholder={props.placeholder}
        rows="4"
        required
      />
      <div className="count">{count}/250</div>
    </label>
  );
};
