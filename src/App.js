import React from "react";
import CardInfo from './components/CardInfo';
import styled from 'styled-components';
import Footer from './components/Footer';


const Main = styled.div`
text-align: center;
background: #008080;
`;

function App() {
  return (
    <Main>
    <h1>NASA Photo of the Day</h1>
    <CardInfo />
    <Footer />
      </Main>
  );
}

export default App;
