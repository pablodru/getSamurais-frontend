import { useLocation, useNavigate, useParams } from "react-router-dom";
import HeaderMain from "../components/HeaderMain";
import styled from "styled-components";
import { ServiceContent } from "../components/ServiceContent";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "../contexts/UserContext";
import { configToken } from "../services/api";

export default function SamuraisPage () {
    const navigate = useNavigate();
    const location = useLocation();
    const name = location.state;

    const userName = JSON.parse(localStorage.getItem('data')).name;
    console.log(userName)

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

    function newService () {
        navigate('/samurais/novo');
    }

    function goToService(id){
        navigate(`/samurais/${id}`);
    }

    if ( services.length === 0 ) {
        return (
            <>
                <HeaderMain />
                <SCTitle>Olá, {name ? name : userName}!</SCTitle>
                <SCAvailable style={{marginTop:'50px'}} > Carregando ...</SCAvailable>
            </>

        )
    }

    else {
        return (
            <>
                <HeaderMain name={name} />
                <SCTitle>Olá, {name ? name : userName}!</SCTitle>
                <SCNewService onClick={newService}> Cadastre um novo serviço </SCNewService>
                <SCAvailable> Serviços disponíveis: </SCAvailable>
                {services.map(service => {
                    const price = (service.price/100).toFixed(2).replace('.',',');
                    return(
                    <ServiceContent onClick={() => goToService(service.id, name)} key={service.id} userName={name} id={service.id} name={service.name} city={service.city} service={service.service} photo={service.photo} price={price} />
                    )
                })}
            </>
        )}
}

const SCTitle = styled.h1`
    margin-top:80px;
    margin-left: 35px;
    font-family:'Montserrat';
    font-size: 22px;
    font-weight:600;
`

const SCNewService = styled.button`
    font-family:'Montserrat';
    font-size: 22px;
    font-weight:600;
    width:303px;
    height:45px;
    background-color: #1C1C1C;
    border-radius: 20px;
    border:1px solid #DBDBDB;
    margin: 15px auto 20px;

    font-family: 'Montserrat';
    font-weight:400;
    font-size:20px;
    color:#ffffff;

    display:flex;
    align-items:center;
    justify-content:center;
`

const SCAvailable = styled.p`
    margin-left: 35px;
    font-family:'Montserrat';
    font-size: 20px;
    font-weight:500;
`