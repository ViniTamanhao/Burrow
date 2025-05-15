import styled from "styled-components";

const LibraryContainer = styled.div`
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

function Library() {
  return (
    <LibraryContainer>
      <Title>Library</Title>
      <Subtitle>
        Select a library to view its contents. You can create, edit, and delete
        libraries as needed. Each library is a separate space for organizing
        your documents. Use the search bar to find specific documents within a
        library. You can also filter documents by type, date of update, and
        other criteria. To add a new document, click the "Add Document" button.
      </Subtitle>
    </LibraryContainer>
  );
}

export default Library;
