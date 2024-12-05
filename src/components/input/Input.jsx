import "./input.css"

export const Input = (props) => {
  return (
    <label htmlFor={props.name}>
      <input
        type={props.type || "text"}
        name={props.name}
        id={props.id}
        placeholder={props.placeholder}
        required
      />
    </label>
  );
};
