import { useLocation, useParams } from "react-router-dom";
import HeaderMain from "../components/HeaderMain";
import styled from "styled-components";
import { ServiceContent } from "../components/ServiceContent";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "../contexts/UserContext";
import { configToken } from "../services/api";

export default function SamuraisPage () {
    const location = useLocation();
    const name = location.state;

    const [services, setServices] = useState([]);

    useEffect(() => {
        const URL = `${import.meta.env.VITE_API_URL}/services`;
        const headers = configToken();

        axios.get(URL, headers)
            .then(res => {
                setServices(res.data);
            })
            .catch(err => alert(`O erro foi: ${err.response.data.message}`))
    },[])

    if ( services.length === 0 ) {
        return (
            <>
                <HeaderMain />
                <SCTitle>Olá, {name}!</SCTitle>
                <p> Carregando ...</p>
            </>

        )
    }

    return (
        <>
            <HeaderMain />
            <SCTitle>Olá, {name}!</SCTitle>
            <ServiceContent />
        </>
    )
}

const SCTitle = styled.h1`
    margin-top:80px;
    margin-left: 35px;
    margin-bottom:20px;
    font-family:'Montserrat';
    font-size: 22px;
    font-weight:600;
`