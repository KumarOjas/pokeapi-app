import React from 'react';
import PropTypes from 'prop-types';

const PokemonCard = ({ pokemon }) => {
  const { name, sprites, types } = pokemon;

  return (
    <div className="pokemon-card">
      <img 
        src={sprites.front_default} 
        alt={name} 
        className="pokemon-image"
      />
      <div className="pokemon-info">
        <h3 className="pokemon-name">{name}</h3>
        <div className="pokemon-types">
          {types.map((type, index) => (
            <span key={index} className={`type ${type.type.name}`}>
              {type.type.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    sprites: PropTypes.shape({
      front_default: PropTypes.string.isRequired
    }).isRequired,
    types: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.shape({
          name: PropTypes.string.isRequired
        }).isRequired
      })
    ).isRequired
  }).isRequired
};

export default PokemonCard;
