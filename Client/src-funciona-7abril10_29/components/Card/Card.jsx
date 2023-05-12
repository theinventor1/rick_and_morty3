import style from "./Card.module.css";
import { Link } from "react-router-dom";
import React from "react";
import {connect} from 'react-redux';
import  {addFav, removeFav} from '../../redux/actions'
import {useState, useEffect} from 'react';

function Card(props) {
  const {id,name,status,species,gender,image,onClose,addFav,removeFav,myFavorites} = props;

const [ isFav, setIsFav ] = useState(false);

const handleFavorites = () => {
  console.log('aqui estoy')
    if (isFav){
      console.log('si es faborito, lo saco')
      setIsFav(false);
      removeFav(id);
    } else {
      console.log('sino, lo pongo de faborito')
      setIsFav(true);
      addFav(props);      
    }
    /**, addFav, removeFav  estas mierdas hiban en el destructunning */
  }
/**useEffect recive una callbak()   */
  useEffect(() => {
        myFavorites.forEach((fav) => {
       if (fav.id === id) {
          setIsFav(true);
       }
    })
 }, [myFavorites]); /**el array de dependencia es el que va a estar mirando los cambios  */
// useEffect(() => {
//   if(myFavorites) {
//     myFavorites.forEach((fav) => {
//       if (fav.id === id) {
//         setIsFav(true);
//       }
//     })
//   }
// }, [myFavorites]);
  
return (
<div className = {style.card}>
  <button className={style.boton} onClick={()=>onClose(id)} >X</button>      
  {  
  isFav ? ( <button onClick={handleFavorites}>❤️</button> ) 
          : ( <button onClick={handleFavorites}>🤍</button>   )   
  }
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
/** esta funcion agarra las 'actions' y las mejora, para ser despachadas  */
/** fuera del componente */
const mapDispatchToProps = (dispatch)  => {
  return {  /**addFav es una propiedad que va a ser function */
      addFav  : (character) => { dispatch(addFav(character))
      },
      removeFav: (id) => { dispatch(removeFav(id));
      }
  }
}

const mapStateToProps = (state) => {  
  return {
    myFavorites : state.myFavorites,
    }      
}
 export default connect(
  mapStateToProps, 
  mapDispatchToProps)
  (Card)