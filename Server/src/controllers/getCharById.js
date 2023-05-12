const axios= require("axios");
const URL = 'https://rickandmortyapi.com/api/character/'

const getCharById = (req, res) => {
     const { id } = req.params;  /**del request 'req' sacamos el id por destructuring */
     
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