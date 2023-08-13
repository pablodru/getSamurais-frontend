import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import styled from "styled-components";
import { ServiceContent } from "../components/ServiceContent";
import ServiceByUser from "../components/ServiceByUser";

export default function MyServicesPage () {
    const location = useLocation();
    const name = location.state;

    return (
        <>
            <Header />
            <SCTitle>Olá, {name} </SCTitle>
            <SCServices>Esses são seus serviços: </SCServices>
            <ServiceByUser/>
        </>
    )
}

const SCTitle = styled.h1`
    margin-top:80px;
    margin-left: 35px;
    font-family:'Montserrat';
    font-size: 22px;
    font-weight:600;
`
const SCServices = styled.p`
    margin-left: 35px;
    margin-top: 15px;
    font-family:'Montserrat';
    font-size: 20px;
    font-weight:500;
`