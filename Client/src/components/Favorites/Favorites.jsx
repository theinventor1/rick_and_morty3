import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../Card/Card';
import { filterCards, orderCards } from '../../redux/actions.js';
import { useState, useDispatch} from 'react-redux'; 


const Favorites = ( {myFavorites} ) => {
      const dispatch = useDispatch()

      const handleOrder = (evento) => {
            dispatch(orderCards(evento.target.value))
      }

      const handleFilter = (evento) => {
            dispatch(filterCards(evento.target.value))
      }

      const favorites = useSelector(state=>state.myFavorites);

      return (
<div>
      <h1>yo soy faboritos</h1>
      <select onChange={handleOrder}>
            <option value="A">Ascendente</option>
            <option value="D">Descendente</option>
      </select>
      <select onChange={handleFilter}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
      </select>
{
favorites.map(({ id, name, species, gender, image })  => {
return  <Card
          key={id}
          id={id}
          name={name}
          species={species}
          gender={gender}
          image={image} 
      /> })}
</div>
  )
}
export default Favorites
