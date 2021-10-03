import React, { useEffect, useState } from 'react';
import { getAll, getByRegion } from '../../services/api';
import Search from '../../components/Search';
import Filter from '../../components/Filter';
import Card from '../../components/Card';

import { CardsContainer } from './style';

function Home({ theme }) {
  const [countries, setCountries] = useState([]);
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getCountries = async () => {
      setIsLoading(true);
      const data = filter !== '' ? await getByRegion(filter) : await getAll();
      setCountries(data);
      setIsLoading(false);
    }
    getCountries();
  }, [setCountries, filter]);

  const nameRegex = new RegExp(input, 'i');
  return (
    <>
      <Search input={ input } setInput={ setInput } theme={ theme } />
      <Filter filter={ filter } setFilter={ setFilter } />
      <CardsContainer>
        {
          isLoading ? 'Loading...' : countries.map((country) => country.name.common.match(nameRegex)
            && <Card code={country.ccn3} flag={country.flags.svg} name={country.name.common} population={country.population} region={country.region} capital={country.capital} />
          )
        }
      </CardsContainer>
    </>
  )
}

export default Home;
