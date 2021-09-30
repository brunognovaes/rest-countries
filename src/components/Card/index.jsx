import React from 'react'
import PropTypes from 'prop-types';

function Card({ flag, name, population, region, capital }) {
  return (
    <div>
      <img src={ flag } alt={ `${name} flag` } />
      <h4>{ name }</h4>
      <div>
        <p>Population: </p>
        <p>{ population }</p>
      </div>
      <div>
        <p>Region: </p>
        <p>{ region }</p>
      </div>
      <div>
        <p>Capital: </p>
        <p>{ capital }</p>
      </div>
    </div>
  )
}

Card.propTypes = {
  flag: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  population: PropTypes.number.isRequired,
  region: PropTypes.string.isRequired,
  capital: PropTypes.string.isRequired,
};

export default Card;
