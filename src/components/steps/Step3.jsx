import { useState } from "react";
import { Input } from "../input/Input";
import Button from "../button/Button";
import { Select } from "../input/Select";
import { TextArea } from "../input/TextArea";
import Seta from "../../assets/seta.svg";
import "./steps.css";
import "./steps1.css";
import { Checkbox } from "../input/Checkbox";

export const Step3 = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleSteps.increment();
  };
  const checkboxes1 = [
    { label: "Internet", id: "internet" },
    { label: "Ar-Condicionado", id: "arCondicionado" },
    { label: "Televisão", id: "televisao" },
    { label: "TV a cabo", id: "tvACabo" },
  ];
  const checkboxes2 = [
    { label: "Casais", id: "casais" },
    { label: "Crianças", id: "criancas" },
    { label: "Fumantes", id: "fumantes" },
    { label: "Pets", id: "pets" },
  ];

  return (
    <div className="container1">
      <form className="form-checkbox" onSubmit={handleSubmit}>
        <div className="container-header1">
          <img
            className="seta"
            src={Seta}
            onClick={props.handleSteps.decrement}
            alt="seta"
          />
          <h2>Defina as comodidades e permissões do seu Poundsflats</h2>
        </div>
        <div className="firstcheck">
          <div className="checkers">
            <p className="tags">Comodidades</p>
            {checkboxes1.map((checkbox) => (
              <div>
                <p>{checkbox.label}</p>
                <Checkbox name={checkbox.id} id={checkbox.id} />
              </div>
            ))}
          </div>
        </div>
        <div className="firstcheck">
          <div className="checkers">
            <p className="tags">Permissões</p>
            {checkboxes2.map((checkbox) => (
              <div>
                <p>{checkbox.label}</p>
                <Checkbox name={checkbox.id} id={checkbox.id} />
              </div>
            ))}
          </div>
        </div>
        <Button type="submit">Continuar</Button>
      </form>
    </div>
  );
};
