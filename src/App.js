import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CharacterMenu from './components/CharacterMenu';
import Game from './components/Game';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CharacterMenu />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </Router>
  );
}

export default App;
