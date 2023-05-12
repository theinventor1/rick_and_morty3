import axios from "axios";
const URL = 'https://rickandmortyapi.com/api/character/'

// const getCharById = (req, res) => {
//     axios
//     // .get(`http://localhost:3001/rickandmorty/character/${id}`)
//     .get(`http://localhost:3001/rickandmorty/onsearch/${id}`)
// }
/**la funcion recive req, res , dentro de la funcion hace una peticion de la API
 * 
 */
const getCharById = (req, res) => {
    /**destructurin del id requerido por parametro  */
     const { id } = req.params;
     /**el get va implicito , axios va a ir a buscar en la URL  */
     axios(URL + id)
     .then(({ data })=> {
        const {status, name, species, origin, image, gender} = data 
        const character = {id,name,species,origin, image, gender  }

         return character ? res.json(character)   
         : res.status(404).send("Not found")
      }) /**el catch recive una callback */
      .catch((error)=>{ /**retornamos  un estatus 500 y el mesaje del error */
        return res.status(500).json({error: error.message})
      })  
}

module.exports  = {
    getCharById
}