import React, { useState } from 'react'
import { ReactComponent as OutlinedMoon } from '../../design/icons/moonoutlined.svg';
import { ReactComponent as FilledMoon } from '../../design/icons/moonfilled.svg';

import { Container, ThemeContainer, Icon } from './style';

function Header({theme, setTheme}) {
  const handleTheme = (e) => {
    e.preventDefault();
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }
  return (
    <Container>
      <p>Where in the world?</p>
        <ThemeContainer htmlFor="icon">
          <Icon id="icon" onClick={ (e) => handleTheme(e) } type="button">
            { theme === 'dark' ? <FilledMoon /> : <OutlinedMoon /> }
          </Icon>
          <p>Dark Mode</p>
        </ThemeContainer>
    </Container>
  )
}

export default Header;
