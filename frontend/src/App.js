import ProductScreen from "./Screens/ProductScreen";
import HomeScreen from "./Screens/HomeScreen";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from "react";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path='/'  element={<HomeScreen />} exact />
            <Route path='/products/:id' element={<ProductScreen />} exact />
          </Routes>
        </Container> 
      </main>
      
      <Footer />
    </Router>
  );
}

export default App;
