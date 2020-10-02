import React from 'react';
import styled from '@emotion/styled';
import Button from './components/Button';

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top:  5rem;
  flex-direction: column;
  background-color: #fff;
  max-width:500px;
`;

function App() {

  return (
    <Container>
      <Button/>
    </Container>
    
  );
}

export default App;
