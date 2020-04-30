import React from "react";
import Header from './components/Header';
import PhotoCard from './components/PhotoCard';
import styled from 'styled-components';
import { Container } from 'reactstrap';
import Footer from './components/Footer';


const Main = styled.div`
text-align: center;
background: #008080;
`;

function App() {
  return (
    <Main>
     <Container 
     className='themed-container'fluid='true'>
        <Header />
        <PhotoCard />
        <Footer />
      </Container>
      </Main>
  );
}

export default App;
