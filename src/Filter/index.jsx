import React, { useState } from 'react'

function Filter() {
  const [filter, setFilter] = useState('');
  return (
    <div>
      <label htmlFor="filter">
        <select value={ filter } id="filter" onChange={(target) => setFilter(target.value)}>
          <option value="">Filter by Region</option>
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </label>
    </div>
  )
}

export default Filter
