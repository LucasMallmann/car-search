import React from 'react';
import classes from './Header.module.sass';

const Header = (props) => {
  return (
    <header>
      <div class="container">
        <div class="mobile_nav">
          <button class="burger" title="Open and close menu">
            <span class="mobile_nav__label">Open and close menu</span>
            <div class="top stripe"></div>
            <div class="middle stripe"></div>
            <div class="bottom stripe"></div>
          </button>
        </div>
        <div class="mobile_menu">
          <nav>
            <ul>
              <li class="visited">
                <a href="/home">Home</a>
              </li>
              <li>
                <a href="/toplist">Toplista</a>
              </li>
              <li>
                <a href="/forum">Forum</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
              <li>
                <a href="/contact">Kontakt</a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="logo">
          <span>Tirix</span>
        </div>
        <nav class="head_nav">
          <ul>
            <li class="visited">
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/toplist">Toplista</a>
            </li>
            <li>
              <a href="/forum">Forum</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/contact">Kontakt</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
