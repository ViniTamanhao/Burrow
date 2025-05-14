import styled from "styled-components";
import Sidebar from "./components/Sidebar";

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

const Title = styled.h1`
  color: ${(props) => props.theme.primary};
`;

function App() {
  return (
    <AppContainer>
      <Sidebar />
      <ContentContainer>
        <Title>Welcome to Burrow!</Title>
        <p>
          Organize your documents into secure, local libraries and search
          contextually with precision and privacy.
        </p>
      </ContentContainer>
    </AppContainer>
  );
}

export default App;
