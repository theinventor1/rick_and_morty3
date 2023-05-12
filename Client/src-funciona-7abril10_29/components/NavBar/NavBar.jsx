import React from 'react'
import { Link } from 'react-router-dom'; 
import SearchBar from '../Search/SearchBar'
import style from "./NavBar.module.css"
function NavBar( { onSearch } ) {
return (
 <div className={style.nav}>     
   <Link to='/Home'>
        <button style={{ width: "100px", height: "50px",}} >Home</button>
   </Link>
   <Link to='/about'>
        <button >About</button>
   </Link>
   <Link to='/favorites'>
        <button >favorites</button>
   </Link>
   <SearchBar onSearch={ onSearch } />
 </div>
  )
}
export default  NavBar