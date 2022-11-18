import { Link } from "react-router-dom"
import styled from "styled-components"
import { useState } from "react"
import axios from "axios"
import Arrow from "../assets/img/arrow.png"
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";

import "../style/icons.css"

export default function BalancePage() {
    return(
        <Container>
            <Content>
            <Header>
                <h1>Olá, Rayandson</h1>
                <img src={Arrow}/>
            </Header>
            <BalanceDiv>
                <FlowDiv>
                    <li>Mercado</li>
                </FlowDiv>
                <Balance>
                    <p>Saldo</p>
                    <p>500,00</p>
                </Balance>
            </BalanceDiv>
            <BotoesDiv>
                <Botao>
                    <div>
                        <AiOutlinePlusCircle className="plus-icon"/>
                        <p>Nova Entrada</p>
                    </div>
                </Botao>
                <Botao>
                    <div>
                        <AiOutlineMinusCircle className="minus-icon" />
                        <p>Nova Saída</p>
                    </div>
                </Botao>
            </BotoesDiv>
            </Content>
        </Container>
    )
}

const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #8C11BE;
padding: 20px 20px;
`
const Content = styled.div`
min-width: 375px;
max-width: 800px;

`

const Header = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
margin-bottom: 22px;

h1 {
    color: #fff;
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
}
img {
    width: 20px;
    height: 20px;
}
`

const BalanceDiv = styled.div`
    width:100%;
    height: 446px;
    background-color: #FFF;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 5px;
`

const FlowDiv = styled.ul`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Balance = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
`
const BotoesDiv = styled.div`
    display: flex;
    justify-content: space-between;
`

const Botao = styled.div`
width: 48%;
height:114px;
background-color: #A328D6;
border-radius: 5px;
margin-top: 13px;
color: #fff;
font-family: 'Raleway', sans-serif;
font-weight: 700;
    div {
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 9px 12px;
    }
`