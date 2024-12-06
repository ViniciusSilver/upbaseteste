import Icon from "../../assets/Icon.svg";
import Seta from "../../assets/seta.svg";
import "./steps.css";
export const Step1 = (props) => {
  return (
    <div className="container">
      <div className="container-header">
        <img className="seta" src={Seta} onClick={props.handleSteps.decrement} alt="seta" />
        <p className="cadastroimovel">
          {" "}
          <span>+ </span>Cadastrar imóvel
        </p>
      </div>
      <h1 className="welcome">Bem-Vindo, Raphael!</h1>
      <div>
        <button className="flat" type="button">Todos os flats</button>
        <button  className='indisponivel' type="button">Indisponiveis</button>
      </div>
      <div className="content">
        <img className="icone" src={Icon} alt="icone triste" />
        <p className="alerta">
          Você não tem nenhum imóvel cadastrado. Que tal cadastrar agora?
        </p>
        <button
          className="cadastrarprimeiro"
          onClick={props.handleSteps.increment}
        >
          Cadastrar meu primeiro imóvel
        </button>
      </div>
    </div>
  );
};
