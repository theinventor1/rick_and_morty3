const axios= require("axios");
const URL = 'https://rickandmortyapi.com/api/character/'

// const getCharById = (req, res) => {
//     axios
//     // .get(`http://localhost:3001/rickandmorty/character/${id}`)
//     .get(`http://localhost:3001/rickandmorty/onsearch/${id}`)
// }

const getCharById = (req, res) => {
     const { id } = req.params;
     
     axios(`${URL}/${id}`)
     .then(response => response.data)
     .then(({status, name, species, origin, image, gender}) => {
        if (name){
            const character = { 
            id,
            name,
            species,
            origin,
            image,
            gender,
            status
        }
         return res.status(200).json(character)        
        }
        return res.status(404).send('Not found')
     })

     .catch(error => res.status(500).send(error))
}


module.exports  = {
    getCharById
}