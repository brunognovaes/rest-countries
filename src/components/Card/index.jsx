import React from 'react'
import { Link } from 'react-router-dom';

import { Container, RowContainer, AboutContainer } from './style';

function Card({code, flag, name, population, region, capital }) {
  return (
    <Container>
      <Link  to={`/details/${code}`}>
        <img src={flag} alt={`${name} flag`} />
      </Link>
      <AboutContainer>
        <h3>{name}</h3>
        <div>
          <RowContainer>
            <p>Population:</p>
            <p>{parseFloat(population).toFixed(2)}</p>
          </RowContainer>
          <RowContainer>
            <p>Region:</p>
            <p>{region}</p>
          </RowContainer>
          <RowContainer>
            <p>Capital:</p>
            <p>{capital}</p>
          </RowContainer>
        </div>
      </AboutContainer>
    </Container>
  )
}

export default Card
