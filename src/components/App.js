import {BrowserRouter, Routes, Route} from "react-router-dom"
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function App() {
  return (
    <BrowserRouter>
    <GlobalStyle />
    <AppContainer>
      <Routes>
        <Route path="/" element={<SignIn/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
      </Routes>
    </AppContainer>
    </BrowserRouter>
  );
}

export default App;

const AppContainer = styled.div`

`
