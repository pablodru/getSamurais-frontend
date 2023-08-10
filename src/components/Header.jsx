import styled from "styled-components"
import logo from '../assets/images/Samurai.png'

export default function Header() {
    return (
        <SCHeader>
            <ion-icon name="arrow-back-outline"></ion-icon>
            <p> GET SAMURAIS </p>
            <ion-icon name="exit-outline"></ion-icon>
        </SCHeader>
    )
}

const SCHeader = styled.div`
    width:100%;
    height:50px;
    background-color:#4F4F4F;
    display: flex;
    justify-content: space-between;
    align-items:center;
    padding: 0px 15px;

    position: fixed;
    top:0;

    ion-icon {
        width: 30px;
        height:30px;
    }
    img {
        width:100px;
        height:60px;
        object-fit:cover;
    }
    p {
        font-size: 18px;
        font-weight: 700;
    }
`