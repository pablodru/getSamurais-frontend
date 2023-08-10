import { useLocation, useParams } from "react-router-dom";
import HeaderMain from "../components/HeaderMain";
import styled from "styled-components";

export default function SamuraisPage () {
    const location = useLocation();
    const name = location.state;

    return (
        <>
            <HeaderMain />
            <SCTitle>Olá, {name} </SCTitle>
        </>
    )
}

const SCTitle = styled.h1`
    margin:80px 20px;
    font-family:'Montserrat';
    font-size: 22px;
    font-weight:600;
`