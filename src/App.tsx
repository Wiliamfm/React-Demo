import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import { Outlet } from 'react-router-dom';
import Footer from './components/footer/footer';
import Search from './components/search_bar/searchBar';
import Trips from './components/trips/trips';

function App() {
  return (
    <div className="App" >
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
