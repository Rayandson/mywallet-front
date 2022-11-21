import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import { useContext, useState } from "react"
import axios from "axios"
import { TokenContext } from "../contexts/TokenContext"
import { UserContext } from "../contexts/UserContext"
import { URL } from "../assets/URL"

export default function OutflowPage() {
    const [cashValue, setCashValue] = useState("")
    const [description, setDescription] = useState("")
    const {token} = useContext(TokenContext)
    const {user} = useContext(UserContext)
    const navigate = useNavigate()

    function save(event) {
        axios.post(`${URL}/transactions`, {cashValue, description, type: "output", userId: user._id}, {headers: {Authorization: `Bearer ${token}`}})
        .then((res) => {
            console.log(res)
            navigate("/balance")
        }).catch ((err) => {
            alert(err.message)
            })
            event.preventDefault();
    }

    return(
        <Container>
        <Content>
        <h1>Nova saída</h1>
        <StyledForm onSubmit={save}>
        <StyledInput type="number" placeholder="Valor" onChange={(e) => setCashValue(e.target.value)} value={cashValue}/>
        <StyledInput placeholder="Descrição" onChange={(e) => setDescription(e.target.value)} value={description}/>
        <Botao type="submit" value="Salvar saída" />
        </StyledForm>
        </Content>
        </Container>
    )
}

const Container = styled.div`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
background-color: #8C11BE;
padding: 25px 0;
    p {
        color: #fff;
        font-family: 'Raleway', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        margin-top: 36px;
        span {
            cursor: pointer;
        }
    }
    h1 {
            font-family: 'Raleway', sans-serif;
            font-weight: 700;
            font-size: 26px;
            color: #FFFFFF;
            margin-bottom: 40px;
        }
`

const Content = styled.div`
width: 326px;
max-width: 800px;
@media(max-width: 380px) {
        width: 90vw;
    }

`
const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 13px;
    
            
`

const StyledInput = styled.input`
    width: 326px;
    height: 53px;
    background: #FFFFFF;
    border-radius: 5px;
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: #000000;
    outline: none;
    padding-left: 15px;
        &::placeholder {
            color: #000000;
            font-family: 'Raleway', sans-serif;
            font-weight: 400;
        }
    @media(max-width: 380px) {
        width: 100%;
    }
`
const Botao = styled.input`
width: 326px;
height: 46px;
background: #A328D6;
border-radius: 5px;
color: #FFFFFF;
font-family: 'Raleway', sans-serif;
font-weight: 700;
cursor: pointer;
@media(max-width: 380px) {
        width: 100%;
    }
`