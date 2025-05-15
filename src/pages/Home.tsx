import styled from "styled-components";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 15px;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-top: 0;
  color: ${(props) => props.theme.primary};
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.text};
  max-width: 70vw;
`;

function Home() {
  return (
    <HomeContainer>
      <Title>Welcome to Burrow!</Title>
      <Subtitle>
        Your Personal Knowledge Hub. Organize documents into secure libraries
        and search contextually – all locally, all privately.
      </Subtitle>
    </HomeContainer>
  );
}

export default Home;
