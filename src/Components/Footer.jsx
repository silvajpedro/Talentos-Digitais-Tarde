import styled from "styled-components"
import React from "react"

const FooterBox = styled.footer`
    background-image: radial-gradient(orange, pink, green,blue,white, #ccff33, purple, black, greenyellow);
    height: 35.4vh;
    display: flex;
    justify-content: center;
    align-items: center;
    h2{
        color: white;
    }
`

export default function Footer(){
    return(
        <FooterBox>
            <h2>Todos os direitos reservados Turma Talentos Digitais - Tarde</h2>
        </FooterBox>
    )
}