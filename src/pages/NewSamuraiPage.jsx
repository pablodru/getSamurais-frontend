import styled from "styled-components";
import Header from "../components/Header";
import { useState } from "react";
import axios from "axios";
import { configToken } from "../services/api";
import { useNavigate } from "react-router-dom";

export default function NewSamuraiPage() {

    const navigate = useNavigate();

    let [name, setName] = useState('');
    let [description, setDescription] = useState('');
    let [price, setPrice] = useState('');
    let [photo, setPhoto] = useState('');

    function newService(e) {
        e.preventDefault();
        
        const newPrice = Number(price.replace(',','.'));

        const URL = `${import.meta.env.VITE_API_URL}/services`;
        const body = { name, description, price: newPrice, photo};
        const headers = configToken();

        axios.post(URL, body, headers)
          .then(res => navigate('/samurais'))
          .catch(err => alert(err.config))
    }

  return (
    <>
      <Header />
      <SCTitulo>Cadastre um novo serviço</SCTitulo>
      <SCSamuraiForm onSubmit={e => newService(e)} >
        <label> Nome do serviço </label>
        <input type='text' placeholder="Nome" required value={name} onChange={e => setName(e.target.value)} />

        <label> Descrição do serviço </label>
        <input type='text' placeholder="Descrição" required value={description} onChange={e => setDescription(e.target.value)} />

        <label> Preço do serviço </label>
        <input type='text' placeholder="Preço" required value={price} onChange={e => setPrice(e.target.value)} />

        <label> Foto do Samurai </label>
        <input type='text' placeholder="Foto" required value={photo} onChange={e => setPhoto(e.target.value)} />

        <button type='submit' >Finalizar cadastro</button>
      </SCSamuraiForm>
    </>
  );
}

const SCTitulo = styled.p`
  font-size: 24px;
  font-weight: 600;
  margin: 80px auto 0 auto;
  text-align: center;
`;

const SCSamuraiForm = styled.form`
  width: 81%;
  height: auto;
  margin: 50px auto;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 15px;

  input {
    width: 303px;
    height: 45px;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    touch-action: manipulation;
    padding-left: 11px;
    &::placeholder {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 400;
      font-size: 19.976px;
      line-height: 25px;
      color: #2f4f4f;
      margin-left: 11px;
    }
  }

  label {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 25px;
    color: #000000;
  }

  button {
    width:303px;
    height:45px;
    background-color: #1C1C1C;
    border-radius: 5px;
    border:1px solid #DBDBDB;
    margin: 50px auto 0 auto;

    font-family: 'Montserrat';
    font-weight:400;
    font-size:20px;
    color:#ffffff;

    display:flex;
    align-items:center;
    justify-content:center;
  }
`;
