import React, { useState } from 'react';
import './Navbar.scss';
import classNames from 'classnames';

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="header__nav nav">
        <ul className={classNames({
          nav__list: true,
          nav__list_burger: open,
        })}>
          <li className="nav__item">
            <a href="#home" className="nav__link">Home</a>
          </li>
          <li className="nav__item">
            <a href="#services" className="nav__link">Services</a>
          </li>
          <li className="nav__item">
            <a href="#team" className="nav__link">Team</a>
          </li>
          <li className="nav__item">
            <a href="#contactUS" className="nav__link">Contact Us</a>
          </li>
        </ul>
      </nav>
      <div className="burger" open={open} onClick={() => {
        setOpen(!open);
        }}>
        <div className={classNames({
          burger__item: true,
          burger__item_first: open,
        })} />
        <div className={classNames({
          burger__item: true,
          burger__item_second: open,
        })} />
        <div className={classNames({
          burger__item: true,
          burger__item_third: open,
        })} />
      </div>

    </>
  );
}

export default Navbar;