import React from 'react';
import logo from './logo.svg';
import './App.css';
import TopBanner from './Rad';
import MovieList from './Movies';
import Podcasts from './Podcast';
import Home from './Home';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';
import { Routes } from 'react-router';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TopBanner saying="The Official Joel Hilton Fanclub" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Movies" element={<MovieList />} />
          <Route path="/Podcast" element={<Podcasts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
