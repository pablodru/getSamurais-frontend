import styled from "styled-components";
import logo1 from '../assets/images/pngwing.com.png'
import logo2 from '../assets/images/Samurai.png'

export default function Logo () {
    return (
        <SCMainLogo>
            <SCLogo src={logo2} alt='Logo' />
            <SCName> GET SAMURAIS </SCName>
        </SCMainLogo>
    )
}

const SCMainLogo = styled.div`
    width:100%;
    height:auto;
    display: flex;
    flex-direction: column;
    margin:100px auto 30px auto;
    justify-content: space-between;
    align-items:center;
    gap:20px
`

const SCLogo = styled.img`
    width:200px;
    height:200px;
    display: block;
    border-radius:10px;
`

const SCName = styled.p`
    font-size: 30px;
    font-weight: 700;
`