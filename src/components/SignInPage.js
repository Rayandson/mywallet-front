import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import { useContext, useState } from "react"
import axios from "axios"
import { TokenContext } from "../contexts/TokenContext"
import { UserContext } from "../contexts/UserContext"

export default function SignInPage() {
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {token, setToken} = useContext(TokenContext)
    const {user, setUser} = useContext(UserContext)
    const navigate = useNavigate()

    function signIn(event) {
        axios.post("http://localhost:5000/sign-in", {email, password})
        .then((res) => {
            setToken(res.data.token)
            setUser(res.data)
            console.log(res.data)
            setEmail("")
            setPassword("")
            navigate("/balance")
        }).catch ((err) => {
            alert(err.message)
            })
            event.preventDefault();
    }

    return(
        <Container>
        <Logo>My Wallet</Logo>
        <StyledForm onSubmit={signIn}>
        <StyledInput type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} value={email}/>
        <StyledInput type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} value={password}/>
        <Botao type="submit" value="Entrar" />
        </StyledForm>
        <p>Primeira vez ? <Link to="/sign-up" ><span>Cadastre-se!</span></Link></p>
        </Container>
    )
}

const Container = styled.div`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #8C11BE;
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
        a {
    text-decoration: none;
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    color: #fff;
}
    }
   
`
const Logo = styled.h1`
    color: #FFFFFF;
    font-family: 'Saira Stencil One', cursive;
    font-size: 32px;
    margin-bottom: 28px;
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
    @media(max-width: 326px) {
        width: 90vw;
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
@media(max-width: 326px) {
        width: 90vw;
    }
`
