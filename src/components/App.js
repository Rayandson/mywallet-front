import {BrowserRouter, Routes, Route} from "react-router-dom"
import styled from "styled-components";
import BalancePage from "./BalancePage";
import GlobalStyle from "./GlobalStyle";
import SignInPage from "./SignInPage";
import SignUpPage from "./SignUpPage";

function App() {
  return (
    <BrowserRouter>
    <GlobalStyle />
    <AppContainer>
      <Routes>
        <Route path="/" element={<SignInPage/>}/>
        <Route path="/sign-up" element={<SignUpPage/>}/>
        <Route path="/balance" element={<BalancePage/>}/>
      </Routes>
    </AppContainer>
    </BrowserRouter>
  );
}

export default App;

const AppContainer = styled.div`

`
