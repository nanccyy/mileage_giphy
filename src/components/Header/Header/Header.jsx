import React from 'react';
import './Header.scss';
import Navbar from '../Navbar/Navbar';
import Logo from '../Logo/Logo';

const Header = () => {

  return (
    <>
      <header className="header container">
        <section className="header__section">
          <Logo />
          <Navbar />
        </section>
      </header>
    </>
  )
};

export default Header;