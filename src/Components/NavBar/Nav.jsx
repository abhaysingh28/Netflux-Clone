import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import Netflux from "./Netflux.png";
import NetfluxAvtar from "./NetfluxAvtar.png";

const Nav = () => {
  return (
    <div>
      <div className="nav">
        <Link to="/"><img className="navlogo" src={Netflux} alt="" /></Link>
        <Link to="/Movies"><img className="navavatar" src={NetfluxAvtar} alt="" /></Link>
        
      </div>
      
      
    </div>
  );
};

export default Nav;
