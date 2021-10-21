import React from "react";
import {Link} from 'react-router-dom'

const Navbar = () => {
    return(
        <div className="navbar">
          <div className="navbar__items">
              <Link to="/about">About site</Link>
              <br/>
              <Link to="/posts">Posts</Link>
          </div>
      </div>
    );
};

export default Navbar;