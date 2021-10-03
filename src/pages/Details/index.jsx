import React, { useEffect, useState } from 'react'
import { getByCode } from '../../services/api';

function Details({ match }) {
  const [country, setCountry] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const {
    params: {
      id,
    },
  } = match;

  useEffect(() => {
    const getCountry = async () => {
      setIsLoading(true);
      const data = await getByCode(id);
      setCountry(data[0]);
      setIsLoading(false);
    };
    getCountry();
  }, [setCountry, id])

  console.log(country)
  return isLoading
      ? <p>Loading...</p>
      : (
          <div>
            <button type="button">Back</button>
            <img src={country.flags.svg} alt={`${country.name.common} flag`} />
            <div>
              <p>Native Name:</p>
              <p>{country.name.nativeName.spa.common}</p>
            </div>
            <div>
              <p>Native Name:</p>
              <p>{country.name.nativeName.spa.common}</p>
            </div>
            <div>
              <p>Native Name:</p>
              <p>{country.name.nativeName.spa.common}</p>
            </div>
            <div>
              <p>Native Name:</p>
              <p>{country.name.nativeName.spa.common}</p>
            </div>
            <div>
              <p>Native Name:</p>
              <p>{country.name.nativeName.spa.common}</p>
            </div>
            <div>
              <p>Native Name:</p>
              <p>{country.name.nativeName.spa.common}</p>
            </div>
            <div>
              <p>Native Name:</p>
              <p>{country.name.nativeName.spa.common}</p>
            </div>
            


          </div>
        );
}

export default Details;
