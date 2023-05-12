import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducer';
import { thunkMiddleware } from 'redux-thunk';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

/** a applyMiddleWare le pasamos thunk que nos permite hacer funciones asincronas */
// const store = createStore (   
//     rootReducer,
//     composeWithDevTools(applyMiddleware),
//     composeEnhancer(applyMiddleware(thunk))
// );

const store = createStore (   
    rootReducer,
    composeEnhancer(applyMiddleware(thunk))
);


export default store;
