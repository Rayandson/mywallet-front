import {BrowserRouter, Routes, Route} from "react-router-dom"
import styled from "styled-components";
import { TokenContextProvider } from "../contexts/TokenContext";
import { UserContextProvider } from "../contexts/UserContext";
import BalancePage from "./BalancePage";
import GlobalStyle from "./GlobalStyle";
import InflowPage from "./InflowPage";
import OutflowPage from "./OutflowPage";
import SignInPage from "./SignInPage";
import SignUpPage from "./SignUpPage";

function App() {
  return (
    <BrowserRouter>
    <GlobalStyle />
    <AppContainer>
      <UserContextProvider>
      <TokenContextProvider>
      <Routes>
        <Route path="/" element={<SignInPage/>}/>
        <Route path="/sign-up" element={<SignUpPage/>}/>
        <Route path="/balance" element={<BalancePage/>}/>
        <Route path="/inflow" element={<InflowPage/>}/>
        <Route path="/outflow" element={<OutflowPage/>}/>
      </Routes>
      </TokenContextProvider>
      </UserContextProvider>
    </AppContainer>
    </BrowserRouter>
  );
}

export default App;

const AppContainer = styled.div`

`
