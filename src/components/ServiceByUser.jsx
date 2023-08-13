import styled from "styled-components"

export default function ServiceByUser () {

    let status = 'ativo'
    return (
        <>
            <SCContent>
                <img src='https://imgnike-a.akamaihd.net/360x360/02695451.jpg' />
                <div>
                    <p>Samurai de aluguel</p>
                    <p>R$ 500,00</p>
                </div>
                <SCStatusP>Status: <SCStatus status='ativo' >ativo</SCStatus></SCStatusP>
            </SCContent>
            <SCButton>
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
`