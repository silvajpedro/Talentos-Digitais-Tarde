import React from "react"
import styled from "styled-components";


const HeaderBox = styled.header`
    background-image: linear-gradient(red, blue, pink, purple, tomato, yellow);
    height: 20vh;
    color: white;
`
const Ul = styled.ul`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 20vh;
    list-style: none;
    font-size: 28px;
`

export default function Header(){

    return(
        <HeaderBox>
            <nav>
                <Ul>
                    <li>Inicio</li>
                    <li>Sobre</li>
                    <li>Contatos</li>
                </Ul>
            </nav>
        </HeaderBox>
    )
}