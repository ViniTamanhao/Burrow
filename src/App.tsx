import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import AppRoutes from "./routes/routes";
import { BrowserRouter as Router } from "react-router-dom";

const AppContainer = styled.div`
  display: flex;
`;

const ContentContainer = styled.div`
  flex: 1;
  padding: 20px;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  min-height: 100vh;
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <Sidebar />
        <ContentContainer>
          <AppRoutes />
        </ContentContainer>
      </AppContainer>
    </Router>
  );
}

export default App;
