import { useLocation, useParams } from "react-router-dom";
import Header from "../components/Header";
import styled from "styled-components";

export default function GetSamuraiPage() {
    const { id } = useParams();
    const location = useLocation();
    const name = location.state;

    return (
        <>
            <Header />
            <SCServiceName>Samurai de aluguel</SCServiceName>
            <SCPersonalInfos>Pablo, Rio de Janeiro</SCPersonalInfos>
            <SCImage>
                <img
                    src="https://imgnike-a.akamaihd.net/360x360/022619ID.jpg"
                    alt="foto"
                />
            </SCImage>
            <SCPrice>R$ 100,00</SCPrice>
            <SCDescription>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
            </SCDescription>
            <SCButtonContact>
                Contate o samurai
                <ion-icon name="logo-whatsapp"></ion-icon>
            </SCButtonContact>
        </>
    );
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
`;

const SCButtonContact = styled.button`
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

    display:flex;
    align-items:center;
    justify-content:center;
    gap:15px;

    ion-icon {
        
    }
`