import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <React.Fragment>
     <nav>
        <ul className="menu_links">
          <li>
            <Link ito='/'><h3>Home</h3></Link>
          </li>
          <li>
            <Link to='/login'><h3>Login</h3></Link>
          </li>
          <li>
            <Link to='/forum'><h3>Forum</h3></Link>
          </li>
          <li>
            <Link to='/transport-list'><h3>Transport list</h3></Link>
          </li>
          <li>
            <Link to='/transport-api'><h3>Transport api</h3> </Link>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
 bn