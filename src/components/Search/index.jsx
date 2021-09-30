import React, { useState } from 'react'

import { ReactComponent as SearchIcon } from '../../design/icons/search.svg';

function Search() {
  const [input, setInput] = useState('');
  return (
    <div>
      <SearchIcon />
      <input placeholder="Search for a country..." value={ input } onChange={ ({target}) => setInput(target.value) } />
    </div>
  )
}

export default Search
