import styled from "styled-components"

export default function SignUp() {
    return(
        <Container>
        <Logo>My Wallet</Logo>
        <StyledForm>
        <StyledInput placeholder="Nome"/>
        <StyledInput type="email" placeholder="E-mail"/>
        <StyledInput type="password" placeholder="Senha"/>
        <StyledInput type="password" placeholder="Confirme a senha"/>
        <Botao type="submit" value="Cadastrar" />
        </StyledForm>
        <p>Já tem uma conta ? <span>Entre agora!</span></p>
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
    height: 58px;
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
`
const Botao = styled.input`
width: 326px;
height: 46px;
background: #A328D6;
border-radius: 5px;
color: #FFFFFF;
font-family: 'Raleway', sans-serif;
font-weight: 700;
`
