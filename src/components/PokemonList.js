import React, { useEffect, useState } from 'react';
import { getPokemonList, getPokemonDetails } from '../api/pokeApi';
import PokemonCard from './PokemonCard';

const PokemonList = ({ searchTerm }) => {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const pokemonList = await getPokemonList();
        const detailedPokemon = await Promise.all(
          pokemonList.map(pokemon => getPokemonDetails(pokemon.url))
        );
        setPokemonData(detailedPokemon);
      } catch (error) {
        console.error('Error fetching Pokemon data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemonData();
  }, []);

  const filteredPokemon = pokemonData.filter(pokemon => 
    pokemon.name.includes(searchTerm)
  );

  if (loading) {
    return <div className="loading">Loading Pokemon...</div>;
  }

  return (
    <div className="pokemon-list">
      {filteredPokemon.map(pokemon => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
      {filteredPokemon.length === 0 && !loading && (
        <div className="no-results">No Pokemon found matching "{searchTerm}"</div>
      )}
    </div>
  );

};

export default PokemonList;
