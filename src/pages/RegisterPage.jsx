import styled from "styled-components";
import Logo from "../components/Logo";
import { useState } from "react";

export default function RegisterPage () {

    let [registerControl, setRegisterControl] = useState('part-1')

    return (
        <>
            <Logo />
            <SCRegisterForm>
                {registerControl==='part-1' && (
                <>
                <p>  Dados Pessoais </p>
                <input type='text' placeholder='Nome' required />
                <input type='text' placeholder='Cidade' required />
                <input type='text' placeholder='URL da sua foto' required />
                <SCButton onClick={() => setRegisterControl('part-2')} > Próximo </SCButton>
                </>)}

                {registerControl==='part-2' && (
                <>
                <p>  Dados Cadastrais </p>
                <input type='email' placeholder='Email' required />
                <input type='password' placeholder='Senha' required />
                <input type='password' placeholder='Confirmar senha' required />
                <SCButton type='submit' > Finalizar cadastro </SCButton>
                </>)}

            </SCRegisterForm>
        </>
    )
}

const SCRegisterForm = styled.form`
    width:81%;
    height:auto;
    margin:50px auto;

    display: flex;
    flex-direction:column;
    justify-content: space-between;
    align-items:center;
    gap:15px;

    input {
        width:303px;
        height:45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        touch-action: manipulation;
        padding-left: 11px;
        &::placeholder{
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 400;
            font-size: 19.976px;
            line-height: 25px;
            color:#2F4F4F;
            margin-left:11px;
        }
    }
    
    p {
        font-size: 22px;
        font-family: 'Montserrat';
        font-weight:700;
        color:#000000;
    }
`

const SCButton = styled.button`
    width:303px;
    height:45px;
    background-color: #1C1C1C;
    border-radius: 5px;
    border:1px solid #DBDBDB;
    margin: 0 auto;

    font-family: 'Montserrat';
    font-weight:400;
    font-size:20px;
    color:#ffffff;

    display:flex;
    align-items:center;
    justify-content:center;
`