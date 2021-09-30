import React, { useState } from 'react'
import { ReactComponent as OutlinedMoon } from '../../design/icons/moonoutlined.svg';
import { ReactComponent as FilledMoon } from '../../design/icons/moonfilled.svg';

import style from './style.module.css';

function Header() {
  const [isDark, setIsDark] = useState(false);
  return (
    <header className={`${style.container}`}>
      <p>Where in the world?</p>
      <div className={`${style.modeContainer}`}>
        { isDark ? <FilledMoon /> : <OutlinedMoon /> }
        <p>Dark Mode</p>
      </div>
    </header>
  )
}

export default Header;
