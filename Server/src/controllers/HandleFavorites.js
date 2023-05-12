/**la informacion la voy a guardar en una base de datos */
/**es necesario hacer cambios en el front */
let myFavorites = [];

const postFav = (req, res) => {
 /**en el body viene un personaje, lo guardo en una cnste */   
    const character = req.body; 
    myFavorites.push(character);
    console.log(character);
    return res.status(200).json(myFavorites);
};

const deleteFav = (req, res) => {
    const { id } = req.params;
       /**el id lo convierto en numero, oseo lo parseo , por eso se usa '+id' */
       /**el 'filter'me permite sacar directamente y recorre una unica vez  */
    // myFavorites =  myFavorites.filter((character) => character.id !== Number(id));  /**felipe */
    myFavorites = myFavorites.filter(favorite => favorite.id !== id)

    return res.status(200).json(myFavorites); /**respondo status 200, ademas hago un json de myFaborites */
}

const getAllFav = (req, res) => {
   // return 
   return json(myFavorites);
}

module.exports = {
    postFav,
    deleteFav
};
