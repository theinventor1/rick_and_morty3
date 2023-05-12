import { ADD_FAV, FILTER, ORDER, REMOVE_COMPONENT_FAVORITES, REMOVE_FAV } from './action-types'
import axios from "axios";


export const addFav = (character) => {
   
   const endpoint = 'http://localhost:3001/rickandmorty/fav';
   console.log('por la chucha: ', character,'-')
   
   return (dispatch) => {
    /**character es lo que recive por body  */
      axios.post(endpoint, character).then(({ data }) => {
         return dispatch({
            type: ADD_FAV,
            payload: data,
         });
      });
   };
};

 export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return (dispatch) => {
       axios.delete(endpoint)
       .then(({ data }) => {
          return dispatch({
             type: REMOVE_FAV,
             payload: data,
          });
       });
    };
 };

export const filterCards = (gender) => {
    return {
        type: FILTER,
        payload: gender
    }
}

export const orderCards = (order)=> {
    return {
        type: ORDER,
        payload: order
    }
}

//Se agrega nueva action
export const removeComponentFavorites = (id) => {
   return {
      type: REMOVE_COMPONENT_FAVORITES,
      payload: id
   }
}