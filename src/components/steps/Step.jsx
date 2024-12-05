import { useState } from "react";
import { Input } from "../input/Input";
import Button from "../button/Button";
import { Select } from "../input/Select";
import { TextArea } from "../input/TextArea";

export const Step = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const inputs = ["imovel", "descricao", "cep", "endereco", "cidade"];
    const formValues = inputs.map((input) => ({
      input,
      value: e.target.elements[input].value,
    }));
    props.setFormData(formValues);
    props.setCurrentStep(1)
  };

  return (
    <>
    <h2>Para começarmos, precisamos de alguns dados</h2>
      <form onSubmit={handleSubmit}>
        <Input name="imovel" id="imovel" placeholder="Nome do Imovel" />
        <p>
          O nome do imóvel será exibido na sua tela inicial e na reserva para o hóspede
        </p>
        <TextArea
          name="descricao"
          id="descricao"
          placeholder="Descrição" 
        />
        <Input name="cep" id="cep" placeholder="CEP" />
        <Input name="endereco" id="endereco" placeholder="Endereço" />
        <div>
          <Input type="number" name="numero" id="numero" placeholder="Número" />
          <Input
            name="complemento"
            id="complemento"
            placeholder="Complemento"
          />
        </div>
        <div>
          <Input name="cidade" id="cidade" placeholder="Cidade" />
          <Select name="uf" id="uf">
          <option value="">UF</option>
            <option value="AC">Acre</option>
            <option value="AL">Alagoas</option>
            <option value="AP">Amapá</option>
            <option value="AM">Amazonas</option>
            <option value="BA">Bahia</option>
            <option value="CE">Ceará</option>
            <option value="DF">Distrito Federal</option>
            <option value="ES">Espírito Santo</option>
            <option value="GO">Goiás</option>
            <option value="MA">Maranhão</option>
            <option value="MT">Mato Grosso</option>
            <option value="MS">Mato Grosso do Sul</option>
            <option value="MG">Minas Gerais</option>
            <option value="PA">Pará</option>
            <option value="PB">Paraíba</option>
            <option value="PR">Paraná</option>
            <option value="PE">Pernambuco</option>
            <option value="PI">Piauí</option>
            <option value="RJ">Rio de Janeiro</option>
            <option value="RN">Rio Grande do Norte</option>
            <option value="RS">Rio Grande do Sul</option>
            <option value="RO">Rondônia</option>
            <option value="RR">Roraima</option>
            <option value="SC">Santa Catarina</option>
            <option value="SP">São Paulo</option>
            <option value="SE">Sergipe</option>
            <option value="TO">Tocantins</option>
            <option value="EX">Estrangeiro</option>
          </Select>
        </div>
        <Button type="submit">Continuar</Button>
      </form>
    </>
  );
};
