import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

const Navigation = props => {

  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">
            Countdown-Timer
          </li>
          <li className="">
            <IndexLink to="/" activeClassName="active-link">Timer</IndexLink>
          </li>
          <li className="">
            <Link to="/countdown" activeClassName="active-link">Countdown</Link>
          </li>

        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li className="menu-text">
            Created By <a href="https://github.com/RusselViola" target="_blank">Russel Viola</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navigation;
