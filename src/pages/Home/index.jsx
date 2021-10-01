import React, { useEffect, useState } from 'react';
import { getAll } from '../../services/api';
import Search from '../../components/Search';
import Filter from '../../components/Filter';

function Home({ theme }) {
  const [countries, setCountries] = useState([]);
  const [input, setInput] = useState('');
  useEffect(() => {
    const getCountries = async () => {
      const data = await getAll();
      setCountries(data);
    }
    getCountries();
  }, [setCountries])

  return (
    <div>
      <Search input={ input } setTheme={ setInput } theme={ theme } />
      <Filter />
    </div>
  )
}

export default Home;
