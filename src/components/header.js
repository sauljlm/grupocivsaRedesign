import React from 'react';

import Nav from './menu';

import { Link } from 'react-router-dom';

export default () => {

  return (
    <header className="header">
      <Link className="header__logo" to="/" title="link to home" ><img src="./static/logo2.png" alt=""/></Link>
      <Nav />
    </header>
  )
}
