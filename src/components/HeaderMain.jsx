import styled from "styled-components"
import logo from '../assets/images/Samurai.png'
import { useNavigate } from "react-router-dom"

export default function HeaderMain({name}) {

    const navigate = useNavigate();

    function logout(){
        localStorage.removeItem('data');
        navigate('/');
    }

    return (
        <SCHeader>
            <ion-icon name="person-circle-outline" onClick={() => navigate('/meus-servicos', {state: name})} ></ion-icon>
            <p onClick={() => navigate('/samurais')} > GET SAMURAIS </p>
            <ion-icon name="exit-outline" onClick={logout} ></ion-icon>
        </SCHeader>
    )
}

const SCHeader = styled.div`
    width:100%;
    height:50px;
    background-color:#4F4F4F;
    display: flex;
    justify-content: space-between;
    align-items:center;
    padding: 0px 15px;

    position: fixed;
    top:0;

    ion-icon {
        width: 30px;
        height:30px;
    }
    img {
        width:100px;
        height:60px;
        object-fit:cover;
    }
    p {
        font-size: 18px;
        font-weight: 700;
        cursor:pointer;
    }
    h6{
        font-family: 'Montserrat';
        font-size:14px;
        font-weight:500;
    }
`