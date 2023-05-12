/**la informacion la voy a guardar en una base de datos */
/**es necesario hacer cambios en el front */

let myFavorites = []

const postFav = (req, res) => {
 /**en el body viene un personaje, lo guardo en una cnste */    
    myFavorites.push(req.body)
    return res.status(200).json(myFavorites);
};

const deleteFav = (req, res) => {
    const { id } = req.params;
       /**el id lo convierto en numero, oseo lo parseo , por eso se usa '+id' */
       /**el 'filter'me permite sacar directamente y recorre una unica vez  */
    const deleteCharacter =  myFavorites.filter((character) =>  character.id !== id );
    
    myFavorites = deleteCharacter  /**pisamos, retornamos el status 200 con un json de misFaboritos */
    
    return res.status(200).json(myFavorites); /**respondo status 200, ademas hago un json de myFaborites */
}

module.exports = {
    postFav,
    deleteFav
};
