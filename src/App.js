import React from "react";
import Header from './components/Header';
import PhotoCard from './components/PhotoCard';
import "./App.css";
import { Container } from 'reactstrap';

function App() {
  return (
    <div className='App'>
     <Container className='themed-container'fluid='true'>
        <Header />
        <PhotoCard />
      </Container>
    </div>
  );
}

export default App;
