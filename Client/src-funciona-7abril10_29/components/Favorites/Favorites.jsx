import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../Card/Card'
const Favorites=() => {

const favorites = useSelector(state=>state.myFavorites);

return (
<div>
      <h1>yo soy faboritos</h1>
{
favorites.map(({id, name, species, gender, image })  => {
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
