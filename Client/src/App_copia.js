import Cards from './components/Cards/Cards.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import style from './App.css';
import Login from './components/Login/Login.jsx'
/**importa un array de caracteres, pero ademas solo rick por destructuring*/
import { useState, useEffect } from 'react';
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import axios from "axios";
import Favorites from './components/Favorites/Favorites.jsx';
import Form from './components/Form/Form.jsx'

const email = 'email@k'; 
const password = 'password';

function App() {
  /**creo el estado State */
let [characters, setCharacters] = useState([]);

const { pathname  } = useLocation(); /** siempre se hace con hooks, este es el nombre de la ruta  */
const location = useLocation();
const navigate = useNavigate();
console.log('locationApp: ',location);
const [access, setAccess] = useState(false);

/**debo hacer a access en true */
/**aqui simulamos el login */

const login = (userData) => {  
  /**condicion */ 
  if (userData.email === email && userData.password === password){
    /**si lo que ingreso es correcto, se debe habilitar el boton */
    setAccess(true);
    navigate('/home');
  }
}

/**si access esta en false, entonce NO me va a llevar a  otra ruta que no sea barra*/

useEffect(() => {
    !access && navigate ('/')
}, [access])  /**array de dependencia debe ir siempre, porque se va a loop */
/**access es un estado local que inicia en false
 * lo que está en useEffect se va a ejecutar siempre que haya un cambio
 * en access, hay un cambio en access cuando completo los datos
 * si yo completo los datos SetAcces pasa a true
  */
// const EMAIL = '';
// const PASSWORD = '';
function onSearch(id) {
  axios
    // .get(`http://localhost:3001/rickandmorty/character/${id}`)
    .get(`http://localhost:3001/rickandmorty/onsearch/${id}`)
    .then(({ data }) => {
      console.log("aqui vienen data estoy en App : ", data,'...');
      if (data.name) {
        let exist = characters.find((ch) => ch.id === data.id);
        if (exist) { 
          alert("ya existe"); } 
        else { setCharacters((oldChars) => [...oldChars, data]);  }
      } 
      else { window.alert("¡No hay personajes con este ID!");    } // .then(()=>{})
    });
}

function onClose(id) {
  setCharacters((oldChars) => {
    return oldChars.filter((ch) => ch.id !== id);
  });
}

return (

<div className="container">   

  {
    location.pathname !== '/' 
    ?  <NavBar onSearch={onSearch} />
    : null
  }
    {/* esto es por miestras */}

{/* <NavBar className={style.cards_container} onSearch={onSearch} /> */}
 <Routes>      
    <Route path="/" element = { <Form login={login} password={password}/> } />
    <Route path="/favorites" element = {<Favorites />} />
    <Route path="/home" element      = {<Cards onClose = { onClose } characters={characters}/>} />
    <Route path="/about" element     = {<About />} />
 </Routes>
</div>
);
}
export default App;
