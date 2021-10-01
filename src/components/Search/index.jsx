import React, { useState } from 'react'

import { ReactComponent as SearchIcon } from '../../design/icons/search.svg';
import { ReactComponent as SearchIconDark } from '../../design/icons/darkSearch.svg';
import { Container, Input, Icon } from './style';

function Search({ theme, input, setInput }) {
  return (
    <Container>
      <Icon>
        { theme === 'dark' ? <SearchIconDark/> : <SearchIcon /> }
      </Icon>
      <Input placeholder="Search for a country..." value={ input } onChange={ ({target}) => setInput(target.value) } />
    </Container>
  )
}

export default Search
