import Seta from "../../assets/seta.svg";
import "./steps.css";
import "./steps1.css";
import Button from "../button/Button";
import { Select } from "../input/Select";
export const Step2 = (props) => {
    const handleSubmit = (e) => {
      e.preventDefault();

      const inputs = ["imoveltipo"];
      const formValues = inputs.map((input) => ({
        input,
        value: e.target.elements[input].value,
      }));
      props.setFormData(formValues);
      props.handleSteps.increment();
    };
  return (
    <div className="container1">
      <form className="form" onSubmit={handleSubmit}>
        <div className="container-header1">
          <img
            className="seta"
            src={Seta}
            onClick={props.handleSteps.decrement}
            alt="seta"
          />
          <h2 className="texthandle">Agora é hora de dar mais detalhes</h2>
          <Select name="imoveltipo" id="imoveltipo">
            <option value="">Tipo de Imóvel</option>
            <option value="apartamento">Apartamento</option>
            <option value="condominio">Condominio</option>
            <option value="casa">Casa</option>
            <option value="sobrado">Sobrado</option>
          </Select>
          <Button type="submit">Continuar</Button>
        </div>
      </form>
    </div>
  );
};
