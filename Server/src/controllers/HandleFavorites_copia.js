/**la informacion la voy a guardar en una base de datos */
/**es necesario hacer cambios en el front */

let myFavorites = []

const postFav = (req, res) => {
    const character = req.body; /**en el body viene un personaje, lo guardo en una cnste */
    
    myFavorites.push(character)


    return res.status(200).json(myFavorites);
};

const deleteFav = (req, res) => {
    const { id } = req.params;
       /**el id lo convierto en numero, oseo lo parseo , por eso se usa '+id' */
       /**el 'filter'me permite sacar directamente y recorre una unica vez  */
    myFavorites =  myFavorites.filter((favorites) => favorites.id !== +id); 
 

    return res.status(200).json(myFavorites); /**respondo status 200, ademas hago un json de myFaborites */
}

module.exports = {
    postFav,
    deleteFav
};
