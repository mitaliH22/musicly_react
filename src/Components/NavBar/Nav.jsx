import React from 'react'
import { Input, Navbar  } from './Styled';
import {Title} from '../Styled';
import './NavBar.scss';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function Nav() {
  const Navigate = useNavigate();
  const logout = () =>{
      window.localStorage.removeItem("token");
      Navigate('/');
  }
  return (
    <Navbar>
      <Link to="/">
        <Title align="left">Musicly</Title>
      </Link>
      <div className="search-bar">
        <Input placeholder="Enter Song/Album/Artist"></Input>
        <span className="icons search-btn">
          <i className="bi bi-search"></i>
        </span>
      </div>
      <div>
        <Title onClick={()=>logout()}>Logout</Title>
      </div>
    </Navbar>
  );
}

export default Nav