import style from "./Card.module.css";
import { Link } from "react-router-dom";
import React from "react";
import {connect} from 'react-redux';
import  {addFav, removeFav} from '../../redux/actions'
import {useState, useEffect} from 'react';

function Card(props) {
  const {id,name,status,species,gender,image,onClose,addFav,removeFav,myFavorites} = props;

const [ isFav, setIsFav ] = useState(false);

/**useEffect recive una callbak()   */
useEffect( () => {
  myFavorites?.forEach((fav) => {
 if (fav.id === props.id) {
    setIsFav(true);
 }
})
}, [myFavorites]); /**el array de dependencia es el que va a estar mirando los cambios  */

const handleFavorites = () => {
  console.log('aqui estoy')
    if (isFav){
      console.log('si es favorito, lo saco')
      setIsFav(false);
      removeFav(id);
    } else {
      console.log('sino, lo pongo de favorito')
      setIsFav(true);
      addFav(props);      
    }
    /**, addFav, removeFav  estas mierdas hiban en el destructunning */
  }

  
return (
<div className = {style.card}>
      
  {  
  isFav ? ( <button onClick={handleFavorites}>❤️</button> ) 
        : ( <button onClick={handleFavorites}>🤍</button>   )   
  }
<button className={style.boton} onClick={ ()=> onClose(id) } >X</button>  

  <Link to = {`/detail/${id}`} > 
    <h2> {name} </h2>    
    <h2> {id} </h2>         
    <h2> {status}</h2>
    <h2> {species}</h2>
    <h2> {gender}</h2>
    <img src={image} alt={name} ></img> 
  </Link>
</div>
);
}  
const mapStateToProps = (state) => {  
  return {
    myFavorites : state.myFavorites,
    }      
}
const mapDispatchToProps = (dispatch)  => {
  return {  /**addFav es una propiedad que va a ser function */
      addFav  : (character) => { dispatch(addFav(character))
      },
      removeFav: (id) => { dispatch(removeFav(id));
      }
  }
}
export default connect(
  mapStateToProps, 
  mapDispatchToProps)
  (Card)