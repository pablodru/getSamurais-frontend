import { useLocation, useParams } from "react-router-dom";
import Header from "../components/Header";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from 'axios';
import { configToken } from "../services/api";

export default function GetSamuraiPage() {
    const { id } = useParams();
    const location = useLocation();
    const userName = location.state;

    const [service, setService] = useState();
    
    useEffect(() => {
        const URL = `${import.meta.env.VITE_API_URL}/services/${id}`
        const headers = configToken();

        axios.get(URL, headers)
            .then(res => setService(res.data))
            .catch(err => alert(`O erro foi: ${err.response.data}`))
    }, []);

    console.log(service)

    if ( !service ) {
        return (
            <>
                <Header />
                <SCServiceName>Olá, {name}!</SCServiceName>
                <p> Carregando ...</p>
            </>

        )
    } 
    
    else {

        const price = (service.price/100).toFixed(2).replace('.',',');

        const message = 
            `Olá, meu nome é ${userName} e gostaria de contratar um serviço: %0A` +
            `- Serviço: ${service.service}%0A` +
            `- Valor: ${price}%0A`;


        return (
            <>
                <Header />
                <SCServiceName>{service.service}</SCServiceName>
                <SCPersonalInfos>{service.name}, {service.city}</SCPersonalInfos>
                <SCImage>
                    <img
                        src={service.photo}
                        alt={service.service}
                    />
                </SCImage>
                <SCPrice>R$ {price}</SCPrice>
                <SCDescription>
                    {service.description}
                </SCDescription>
                <SCButtonContact href={`https://wa.me/+55${service.phone}?text=${message}`} target="_blank" >
                    Contate o samurai
                    <ion-icon name="logo-whatsapp"></ion-icon>
                </SCButtonContact>
            </>
        );}
}

const SCServiceName = styled.p`
    font-family: "Montserrat";
    font-size: 22px;
    font-weight: 600;
    margin: 80px 0 0 30px;
`;

const SCPersonalInfos = styled.p`
    width: 100%;
    padding: 10px 30px;
    font-weight: 500;
`;

const SCImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px auto;
    img {
        width: 313px;
        height: 313px;
        object-fit: cover;
    }
`;

const SCPrice = styled.p`
    width: 100%;
    padding: 10px 30px;
    font-weight: 600;
    margin-bottom: 10px;
    //text-align: right;
`

const SCDescription = styled.p`
    font-family: "Montserrat";
    font-size: 14px;
    font-weight: 400;
    width: 313px;
    height: auto;
    margin: 0 auto;
    word-wrap: break-word;
    line-height: 20px;
`;

const SCButtonContact = styled.a`
    font-family:'Montserrat';
    font-size: 22px;
    font-weight:600;
    width:303px;
    height:45px;
    background-color: #1C1C1C;
    border-radius: 20px;
    border:1px solid #DBDBDB;
    margin: 20px auto 20px;

    font-family: 'Montserrat';
    font-weight:400;
    font-size:20px;
    color:#ffffff;
    text-decoration: none;

    display:flex;
    align-items:center;
    justify-content:center;
    gap:15px;
`