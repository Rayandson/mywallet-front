import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import { useContext, useEffect, useState } from "react"
import axios from "axios"
import Arrow from "../assets/img/arrow.png"
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";

import "../style/icons.css"
import { TokenContext } from "../contexts/TokenContext"
import { UserContext } from "../contexts/UserContext"

export default function BalancePage() {
    const navigate = useNavigate()
    const {token} = useContext(TokenContext)
    const {user} = useContext(UserContext)
    const [transactions, setTransactions] = useState(undefined)
    const [balance, setBalance] = useState("")

    function goToPage(route) {
        navigate(route)
    }

    useEffect(() => {
        axios.get("http://localhost:5000/transactions", {headers: {token: token}})
        .then((res) => {
            setTransactions(res.data.transactions)
            setBalance(res.data.balance)
        }).catch((e) => {
            alert(e.message)
        })
    }, [])

    if(transactions === undefined) {
        return(
            <Container>
            <Content>
            <Header>
                <h1>Olá, {user.name}</h1>
                <img src={Arrow} onClick={() => goToPage("/")}/>
            </Header>
            <BalanceDiv>
                <MessageDiv>
                    <div>
                    <Message>Carregando...</Message>
                    </div>
                </MessageDiv>
            </BalanceDiv>
            <BotoesDiv>
                <Botao onClick={() => goToPage("/inflow")}>
                    <div>
                        <AiOutlinePlusCircle className="plus-icon"/>
                        <p>Nova Entrada</p>
                    </div>
                </Botao>
                <Botao onClick={() => goToPage("/outflow")}>
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

    if(transactions.length === 0) {
        return(
            <Container>
            <Content>
            <Header>
                <h1>Olá, {user.name}</h1>
                <img src={Arrow} onClick={() => goToPage("/")}/>
            </Header>
            <BalanceDiv>
                <MessageDiv>
                    <div>
                    <Message>Não há registros de entrada ou saída</Message>
                    </div>
                </MessageDiv>
            </BalanceDiv>
            <BotoesDiv>
                <Botao onClick={() => goToPage("/inflow")}>
                    <div>
                        <AiOutlinePlusCircle className="plus-icon"/>
                        <p>Nova Entrada</p>
                    </div>
                </Botao>
                <Botao onClick={() => goToPage("/outflow")}>
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
    return(
        <Container>
            <Content>
            <Header>
                <h1>Olá, {user.name}</h1>
                <img src={Arrow} onClick={() => goToPage("/")}/>
            </Header>
            <BalanceDiv>
                <FlowDiv>
                {transactions.map((t) => {
                    return(
                    <Item>
                        <ItemTitle><span>{t.date}</span>{t.description}</ItemTitle>
                        <Cash>{t.cashValue}</Cash>
                    </Item>
                    )
                })}
                    
                </FlowDiv>
                <Balance>
                    <h2>Saldo</h2>
                    <p>{balance}</p>
                </Balance>
            </BalanceDiv>
            <BotoesDiv>
                <Botao onClick={() => goToPage("/inflow")}>
                    <div>
                        <AiOutlinePlusCircle className="plus-icon"/>
                        <p>Nova Entrada</p>
                    </div>
                </Botao>
                <Botao onClick={() => goToPage("/outflow")}>
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
min-height: 100vh;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
background-color: #8C11BE;
padding: 20px 20px;
`
const Content = styled.div`
width: 375px;
max-width: 800px;
@media(max-width: 380px) {
        width: 90vw;
    }

`

const Header = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
margin-bottom: 28px;

h1 {
    color: #fff;
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
}
img {
    width: 23px;
    height: 23px;
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
    padding: 10px 11px;
    @media(max-width: 380px) {
        width: 90vw;
    }
`

const FlowDiv = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Balance = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
    h2 {
        font-family: 'Raleway', sans-serif;
        font-weight: 700;
        font-size: 17px;
        color: #000000;
    }
    p {
        font-family: 'Raleway', sans-serif;
        font-size: 16px;
        font-weight: 400;
        color: #03AC00;
    }
`
const BotoesDiv = styled.div`
    display: flex;
    justify-content: space-between;
    @media(max-width: 380px) {
        width: 90vw;
    }
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
const Item = styled.div`
width: 100%;
height: 30px;
display: flex;
justify-content: space-between;
align-items: center;
`
const ItemTitle = styled.p`
font-family: 'Raleway', sans-serif;
font-size: 16px;
font-weight: 400;
color: #000000;
span {
    color: #C6C6C6;
    margin-right: 10px;
}
`

const Cash = styled.p`
    font-family: 'Raleway', sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: #C70000;
`

const MessageDiv = styled.div`
width:100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
    div {
        width: 60%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
`
const Message = styled.p`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: #868686;
`