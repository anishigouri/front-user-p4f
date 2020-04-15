import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';

export default function Navbar() {
  return (
    <div className="Navbar-main">
      <div>
        <Link to="/photos">Photos</Link>
        <Link to="/posts">Posts</Link>
      </div>
    </div>
  );
}
