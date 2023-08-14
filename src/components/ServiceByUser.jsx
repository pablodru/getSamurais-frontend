import styled from "styled-components"
import { configToken } from "../services/api";
import axios from "axios";

export default function ServiceByUser (props) {

    const { service, price, status, id, photo, setChange } = props;

    const URL = `${import.meta.env.VITE_API_URL}/my-services/${id}`;
    const headers = configToken();

    function deleteService () {

        const confirm = window.confirm('Deseja deletar este serviço?');
        if ( !confirm ) return
        
        axios.delete(URL, headers)
            .then(res => setChange(prev => !prev))
            .catch(err => alert(`Erro: ${err.response.data.message}`))

    }

    function editStatus () {

        const confirm = window.confirm(`Deseja ${status === 'ativo' ? 'desativar' : 'ativar'} este serviço?`);
        if ( !confirm ) return

        axios.put(URL, {}, headers)
            .then(res => setChange(prev => !prev))
            .catch(err => {
                console.log(err)
                //alert(`Erro: ${err.response.data.message}`)
            })

    }

    return (
        <>
            <SCContent>
                <img src={photo} />
                <div>
                    <p>{service}</p>
                    <p>R$ {price.replace('.',',')}</p>
                </div>
                <SCStatusP>Status: <SCStatus status={status} > {status} </SCStatus></SCStatusP>
                <ion-icon name="trash-outline" style={{color:'red'}} onClick={deleteService} ></ion-icon>
            </SCContent>
            <SCButton onClick={editStatus} >
                {status === 'ativo' ? 'Desativar' : 'Ativar'}
            </SCButton>
        </>
    )
}

const SCStatusP = styled.p`
    padding-left: 10px;
`

const SCStatus = styled.span`
    color: ${props => props.status==='ativo' ? 'green': 'red'};    
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
    margin: 15px auto 20px;

    font-family: 'Montserrat';
    font-weight:400;
    font-size:20px;
    color:#ffffff;

    display:flex;
    align-items:center;
    justify-content:center;
`

const SCContent = styled.div`
    width:313px;
    min-height:300px;
    margin: 20px auto 0 auto;
    border: 1px solid #708090;
    border-radius:10px;
    box-shadow: 0 0 10px #708090;
    position: relative;
    img {
        width: 100%;
        height:200px;
        object-fit:cover;
        border-radius:10px;
    }
    div {
        display:flex;
        flex-direction:column;
        align-items:flex-start;
        justify-content:space-between;
        gap: 6px;
        padding:10px;
        p {
            font-size: 16px;
            :first-child{
                font-weight:500;
            }
        }
    }
    ion-icon {
        position: absolute;
        width:30px;
        height:30px;
        right:20px;
        bottom:20px;
    }
`