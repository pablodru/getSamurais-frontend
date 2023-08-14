import { useNavigate } from "react-router-dom";
import styled from "styled-components"

export function ServiceContent (props) {
    const { name, service, photo, price, city, id, userName } = props;

    const navigate = useNavigate();

    function goToService(id){
        navigate(`/samurais/${id}`, {state: userName});
    }

    return (
        <SCBox onClick={() => goToService(id)}>
            <img src={photo} alt={service} />
            <div>
                <p>{name} </p>
                <p>{service}</p>
            </div>
            <div>
                <p>{city }</p>
                <p>R$ {price}</p>
            </div>
        </SCBox>
    )
}

const SCBox = styled.div`
    width:300px;
    min-height:330px;
    //background-color:red;
    margin: 12px auto 20px auto;
    border: 1px solid #708090;
    border-radius:10px;
    box-shadow: 0 0 10px #708090;
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:space-between;
    gap:8px;
    padding-bottom:8px;
    img {
        width:100%;
        height:250px;
        object-fit:cover;
        border-radius:10px;
    }
    div {
        width:100%;
        height:auto;
        display: flex;
        justify-content: space-between;
        align-items:center;
        padding:10px 10px 0 10px;
        :last-child {
            border-top: 1px solid #708090;
        }
    }
    p {
        font-size:16px;
        font-weight:600;
        width:50%;
        word-wrap: break-word;
        vertical-align:top;
        text-align:left;
        :last-child {
            padding:0 10px;
        }
    }
    
`