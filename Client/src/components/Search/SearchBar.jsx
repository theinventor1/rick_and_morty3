import { useState } from "react";
import style from './SearchBar.module.css'; /** asi se usa el style */

function SearchBar({ onSearch }) {

 const [id, setId] = useState(""); /**esto estaba bien  */

 function handleChange(event) {
        // console.log("entra en handleChange : ", event.target.value);
         setId(event.target.value);  /**este me deja modificar el input */
    }

return (
<div className = {style.search}> 
  <input  className = {style.input} onChange={handleChange} type="search" name="search" value = {id} />
  <button className = {style.boton} onClick={ () => onSearch(id) }>Agregar</button>
</div>
 
 );
}
export default SearchBar



