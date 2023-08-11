import styled from "styled-components"

export function ServiceContent () {
    return (
        <SCBox>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRevnWjT3sf0_AKh2l-1eUsBAhoSzt_sG4JXtAM0dHzYA&s' />
            <div>
                <p>Pablo </p>
                <p>Pedreiro</p>
            </div>
            <p>R$ 100,00</p>
        </SCBox>
    )
}

const SCBox = styled.div`
    width:300px;
    height:330px;
    //background-color:red;
    margin: 12px auto 10px auto;
    border: 1px solid black;
    border-radius:10px;
    box-shadow: 0 0 10px #708090;
    img {
        width:100%;
        height:250px;
        object-fit:cover;
        border-radius:10px;
    }
    div {
        width:100%;
        display: flex;
        justify-content: space-between;
        align-items:center;
        margin: 8px 0;
        padding:0 10px;
    }
    p {
        font-size:16px;
        font-weight:600;
        :last-child {
            padding:0 10px;
            margin-top:10px;
        }
    }
    
`