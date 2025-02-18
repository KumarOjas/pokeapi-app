import React, { useState } from 'react';
import PokemonList from './components/PokemonList';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className="app">
      <h1 className="app-title">Pokédex</h1>
      <SearchBar onSearch={handleSearch} />
      <PokemonList searchTerm={searchTerm} />
    </div>
  );
}

export default App;
