import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import { Outlet } from 'react-router-dom';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App" >
      <Header />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
}

export default App;
