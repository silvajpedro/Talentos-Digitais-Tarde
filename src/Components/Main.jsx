import React from "react"
import styled from "styled-components"


const MainBox = styled.main`
    background-color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    img{
        height:44vh;
        border-radius: 20px;
        border: solid;
    }
`

export default function Main(){
    return(
        <MainBox>
            
            <figure>
                <img src="https://dcdn.mitiendanube.com/stores/001/846/054/products/pintura-191-02c260595e7eb5b02f16545429991033-1024-1024.jpg" alt="pintura abstrata da turma talentos digitais" />
            </figure>

            <figure>
                <img src="https://cdn.myportfolio.com/f62703ea-e0fc-441a-8241-08b61a9889f3/f8fb1acc-f9fd-4f22-9fad-8ae2f7ea6396_rw_1920.jpg?h=a4bf746b8373571a79f9f84087f04288" alt="pintura abstrata da turma talentos digitais" />
            </figure>

            <figure>
                <img src="https://static.todamateria.com.br/upload/og/ri/ogrito-cke.jpg" alt="pintura abstrata da turma talentos digitais" />
            </figure>

        </MainBox>
    )
}