import React from 'react'

import { Select, Option } from './style';

function Filter({ filter, setFilter }) {
  return (
    <div>
      <label htmlFor="filter">
        <Select value={ filter } id="filter" onChange={({target}) => setFilter(target.value)}>
          <Option value="" disabled selected hidden>Filter by Region</Option>
          <Option value="africa">Africa</Option>
          <Option value="americas">Americas</Option>
          <Option value="asia">Asia</Option>
          <Option value="europe">Europe</Option>
          <Option value="oceania">Oceania</Option>
        </Select>
      </label>
    </div>
  )
}

export default Filter
