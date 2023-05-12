// import { ADD_FAVORITES } from  './actions'
import { ADD_FAV, REMOVE_FAV, FILTER, ORDER} from './actions'
/**estado incial , siempre va con nada */

const initialState = {
    myFavorites: [],
    myFavoritesOrigin: [], //solo lo cambian Add y remove
    allCharacters: []
};
/**esta es la original  */
// const rootReducer = (state = initialState, action)=> {
//     switch (action.type) {
//         case ADD_FAV: 
//             return {
//                 ...state,
//                 myFavorites: [...state.myFavorites, action.payload]
//             }
        
//         case REMOVE_FAV:        
//             return {
//                 ...state,
//                 myFavorites: state.myFavorites.filter(
//                     character => character.id !== Number(action.payload))
//             }         
//         default:
//             return {
//                  ...state                    
//                 }                 
//  }
// }


// const reducer = (state = initialState, action ) => {
//     switch (action.type) {

//     }
// }

const rootReducer = (state = initialState, action)=> {
    switch (action.type) {
        case ADD_FAV: 
            return {
                ...state,
                myFavorites: [...state.allCharacters, action.payload],
                myFavoritesOrigin:  [...state.myFavoritesOrigin, action.payload]

            }
        
        case REMOVE_FAV:        
            const newFavorites = state.myFavoritesOrigin.filter((ch) => ch.id !== action.payload)
            return {
                ...state,
                myFavorites: newFavorites,
                myFavoritesOrigin: newFavorites
            }         
        case FILTER: 
        const newFilter = state.myFavoritesOrigin.filter((ch) => ch.gender === action.payload);
        return {
                ...state,
                myFavorites: newFavorites,
            }

        case ORDER: 
        const newOrder = state.myFavoritesOrigin.sort((ch) => ch.gender === action.payload);
            return {
                ...state,
                allCharacters: state.allCharacters.filter(
                    character => character.sort === action.id
                )}    
          

        default:
            return {
                 ...state                    
                }         
                if (action.payload === 'A')   {    
                } else {
                    if (action.payload === 'D')   {  }

                }             
 }

}

export default rootReducer;