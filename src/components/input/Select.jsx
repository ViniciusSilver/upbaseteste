import "./select.css";
export const Select = (props) => {
  return (
    <select id={props.id} name={props.name} required>
      {props.children}
    </select>
  );
};
