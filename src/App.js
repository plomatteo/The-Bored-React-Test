import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Navbar1 from './components/navbar';
import Footer from './components/footer';
import HomeContent from './components/HomeContent';
import SearchContent from './components/SearchContent';
import FavouriteContent from './components/FavouriteContent';



function App() {
  return (
    <div className="App">
      <Navbar1 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="search" element={<Search />} />
        <Route path="favourite" element={<Favourite />} />
      </Routes>
      <Footer />
    </div>
  );
}

function Home() {
  return (
    <>
      <HomeContent />
    </>
  );
}

function Search() {
  return (
    <>
      <SearchContent />
    </>
  );
}

function Favourite() {
  return (
    <>
      <FavouriteContent />
    </>
  );
}

export default App;
