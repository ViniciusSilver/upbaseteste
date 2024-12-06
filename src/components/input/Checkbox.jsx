import "./checkbox.css";

export const Checkbox = (props) => {
  return (
    <label className="switch" htmlFor={props.name}>
      <input type="checkbox" name={props.name} id={props.id} required />
      <span className="slider round"></span>
    </label>
  );
};
