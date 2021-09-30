import React, { useEffect, useState } from 'react';
import { getAll } from '../../services/api';

import './style.css';

function Home() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getCountries = async () => {
      const data = await getAll();
      setCountries(data);
    }
    getCountries();
  }, [setCountries])

  return (
    <div>
      <p>Home</p>
    </div>
  )
}

export default Home;
