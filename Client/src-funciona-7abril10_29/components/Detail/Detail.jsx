import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

// const character = { };

const Detail=()=> {

  /**aqui viene lo importante: */
  const [character, setCharacter] = useState({}) /** estado local  */
  console.log('soy el character ')
  const { id } = useParams();

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
       if (data.name) {
          setCharacter(data);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
    return setCharacter({});
 }, [id]);

return (
<>
  <h1>Detail</h1>
  { /**si hay character (al menos 1 , vamos a renderizar un div y sino hacemos 
   * algo ... , se usa condicional ? "es como IF "
   */
  character ? (
    <div>
       <h1>VALERIA</h1>
       <h2>id: {character.id}</h2>
       <h2>Name: {character.name}</h2>
       <h2>Status: {character.status}</h2>
       <h2>Species: {character.species}</h2>
       <h2>Gender: {character.gender}</h2>
       <h2>Origin: {character.origin?.name}</h2>
       <img src={character.image} alt={character.name} />
    </div>
  ) : (   /**sino, entonces no hacemos nada  */
    ""
  )
  }
</>   
)
}
export default  Detail
