import "./button.css";

function Button(props) {
  return <button type={props.type}>{props.children}</button>;
}

export default Button;
