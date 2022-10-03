
import React from 'react'

import Stack from '@mui/material/Stack';

import  SearchBar  from "../components/SearchBar";
import { Link } from "react-router-dom";
import logo from '../utils/logo.png'



const Navbar = () => {
  return (
    <Stack
    p={2}
    sx={{position:'sticky',background:'#000',top:0,justifyContent:'space-between'}}
    direction="row"
    
  >
   <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
    </Link>
    <SearchBar />
  </Stack>
  )
}

export default Navbar