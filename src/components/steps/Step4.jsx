import Seta from "../../assets/seta.svg";
import "./steps.css";
import "./steps1.css";
import Button from "../button/Button";
import { Select } from "../input/Select";
import ImovelIdle from "../../assets/imovelidle.jpg";
import Banheiro from "../../assets/banheiro.svg";
import Cama from "../../assets/cama.svg";
import Cozinha from "../../assets/cozinha.svg";
import Sala from "../../assets/sala.svg";
import Lavanderia from "../../assets/lavanderia.svg";
import Foto from "../../assets/foto.png";
export const Step4 = (props) => {
  return (
    <div className="container2">
      <div className="container-header">
        <img
          className="seta"
          src={Seta}
          onClick={props.handleSteps.decrement}
          alt="seta"
        />
      </div>
      <p className="cabecalho">
        Visualize e confirme agora o cadastro do seu imóvel
      </p>
      <div>
        <img src={ImovelIdle} alt="foto imovel" />
      </div>
      <h1>Nome do Imóvel</h1>
      <div className="localrow">
        <p>Santos, SP</p>
        <p>Diária: R$97</p>
      </div>
      <p className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
        egestas dolor, nec dignissim metus.
      </p>
      <Button>Video Visita</Button>
      <div className="detalhes-container">
        <div className="detalhes">
          <img src={Cama} alt="cama" />
          <p>Quarto mobilidado</p>
        </div>
        <div className="detalhes">
          <img src={Banheiro} alt="banheiro" />
          <p>Banheiro equipado</p>
        </div>
        <div className="detalhes">
          <img src={Cozinha} alt="cozinha" />
          <p>Cozinha equipada</p>
        </div>
        <div className="detalhes">
          <img src={Sala} alt="sala" />
          <p>Sala equipada</p>
        </div>
        <div className="detalhes">
          <img src={Lavanderia} alt="lavanderia" />
          <p>Área de serviço</p>
        </div>
      </div>
      <hr className="row" />
      <div className="idcontainer">
        <div className="idjustify">
          <p>Locado por Nome do Cliente</p>
          <img src={Foto} alt="foto do cliente" />
        </div>
      </div>
      <hr className="row" />
      <div className="tipoimovel">
        <p className="tipotexto">Tipo de Imóvel</p>
        <p className="textoimovel">Casa</p>
      </div>
      <div>
        <h2 className="comodidades">Comodidades</h2>
        <div className="comodidades-ajuste">
          <p>Internet </p>
          <p>TV a Cabo </p>
          <p>Televisão </p>
          <p>Ar Condicionado </p>
        </div>
      </div>
      <button type="submit">Finalizar cadastro do imóvel</button>
    </div>
  );
};
