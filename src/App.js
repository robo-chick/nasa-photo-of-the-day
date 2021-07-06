import React from "react";
import CardInfo from './components/CardInfo';
import styled from 'styled-components';
import Footer from './components/Footer';


const Main = styled.div`
text-align: center;
background: #008080;
font-family: 'Roboto', sans-serif; 
font-size: 2rem;
`;

const Heading = styled.h1`
font-family: 'Barlow', sans-serif;
`;

function App() {
  return (
    <Main>
    <Heading>NASA Photo of the Day</Heading>
    <CardInfo />
    <Footer />
      </Main>
  );
}

export default App;
