import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import styled from "styled-components";
import { ServiceContent } from "../components/ServiceContent";
import ServiceByUser from "../components/ServiceByUser";
import { useEffect, useState } from "react";
import axios from "axios";
import { configToken } from "../services/api";

export default function MyServicesPage () {
    const location = useLocation();
    const name = location.state;

    const [userServices, setUserServices] = useState([]);
    const [change, setChange] = useState(true);

    console.log(change)

    useEffect(() => {
       
        const URL = `${import.meta.env.VITE_API_URL}/my-services`;
        const headers = configToken();

        axios.get(URL, headers)
            .then(res => setUserServices(res.data))
            .catch(err => alert(err.response.data.message))
    },[change])

    return (
        <>
            <Header />
            <SCTitle>Olá, {name} </SCTitle>
            <SCServices>Esses são seus serviços: </SCServices>
            {userServices.map(service => {
                const price = (service.price/100).toFixed(2);
                return (
                    <ServiceByUser key={service.id} service={service.service} price={price} status={service.status} id={service.id} photo={service.photo} setChange={setChange} />
                )
            })}
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