import styled from "styled-components"
import Logo from "../components/Logo"
import { useNavigate } from "react-router-dom"

export default function LoginPage () {

    const navigate = useNavigate();

    return (
        <>
            <Logo />
            <SCLoginForm>
                <input type='email' placeholder='email' required />
                <input type='password' placeholder='senha' required />
                <SCButton style={{fontSize:'20px'}} type='submit' >Entrar</SCButton>
            </SCLoginForm>
            <SCButton onClick ={() => navigate('/cadastro')}>Quer criar uma conta? Cadastre-se!</SCButton>
        </>
    )
}

const SCLoginForm = styled.form`
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
    font-size:15px;
    color:#ffffff;

    display:flex;
    align-items:center;
    justify-content:center;
`