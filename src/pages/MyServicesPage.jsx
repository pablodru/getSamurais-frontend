import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import styled from "styled-components";
import { ServiceContent } from "../components/ServiceContent";
import ServiceByUser from "../components/ServiceByUser";
import { useEffect, useState } from "react";
import axios from "axios";
import { configToken } from "../services/api";

export default function MyServicesPage() {
    const location = useLocation();
    const name = location.state;
    const navigate= useNavigate();

    const [userServices, setUserServices] = useState([]);
    const [change, setChange] = useState(true);

    const userName = JSON.parse(localStorage.getItem("data")).name;
    console.log(userName);

    useEffect(() => {
        const URL = `${import.meta.env.VITE_API_URL}/my-services`;
        const headers = configToken();

        axios
            .get(URL, headers)
            .then((res) => setUserServices(res.data))
            .catch((err) => console.log(err.response.data.message));
    }, [change]);

    return (
        <>
            <Header />
            <SCTitle>Olá, {name ? name : userName} </SCTitle>
            <SCServices>Esses são seus serviços: </SCServices>
            {userServices.length === 0 ? (
                <SCdiv>
                    <SCNoServices> Sem serviços criados </SCNoServices>
                    <SCButton onClick={() => navigate('/samurais/novo')} >
                        Criar Serviço
                    </SCButton>
                </SCdiv>
            ) : (
                userServices.map((service) => {
                    const price = (service.price / 100).toFixed(2);
                    return (
                        <ServiceByUser
                            key={service.id}
                            service={service.service}
                            price={price}
                            status={service.status}
                            id={service.id}
                            photo={service.photo}
                            setChange={setChange}
                        />
                    );
                })
            )}
        </>
    );
}

const SCTitle = styled.h1`
    margin-top: 80px;
    margin-left: 35px;
    font-family: "Montserrat";
    font-size: 22px;
    font-weight: 600;
`;
const SCServices = styled.p`
    margin-left: 35px;
    margin-top: 15px;
    font-family: "Montserrat";
    font-size: 20px;
    font-weight: 500;
`;

const SCdiv = styled.div`
    margin-top:100px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap: 25px;
`

const SCNoServices = styled.p`
    margin-top: 15px;
    font-family: "Montserrat";
    font-size: 20px;
    font-weight: 500;
`

const SCButton = styled.button`
    font-family:'Montserrat';
    font-size: 22px;
    font-weight:600;
    width:303px;
    height:45px;
    background-color: #1C1C1C;
    border-radius: 20px;
    border:1px solid #DBDBDB;

    font-family: 'Montserrat';
    font-weight:400;
    font-size:20px;
    color:#ffffff;

    display:flex;
    align-items:center;
    justify-content:center;
`