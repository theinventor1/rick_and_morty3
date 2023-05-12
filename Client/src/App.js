import './App.css'
import Cards from './components/Cards/Cards';
import NavBar from './components/NavBar/NavBar';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Detail from './components/Detail/Detail';
import About from './components/About/About';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';
import { useDispatch } from 'react-redux';
import { removeComponentFavorites } from './redux/actions';

function App () {
  let [ characters, setCharacters ] = useState([])
  const dispatch = useDispatch()
  const [ access, setAccess] = useState(false);
  // const EMAIL = 'meli@soyhenry.com';
  // const PASSWORD = "1234meli"
  const { pathname } = useLocation();
  const navigate = useNavigate();

  function onSearch(id) {
  console.log('cliente: onSearch app(), id: ',id,'.');  
  axios(`http://localhost:3001/rickandmorty/character/${id}`)
  .then(({data}) => {
    const char = characters?.find(e => e.id === Number(data.id))
    if (char) {
      alert("Already in the list") 
    } 
    else if(data.id !== undefined) {
      setCharacters (characters => [...characters, data]);
    }
  
    else {
      alert('Character not found');
    }
  })
  }

  function login(userData) {
     console.log('cliente: login app()');   
     const { email, password } = userData;
     const URL = 'http://localhost:3001/rickandmorty/login/';
     /**hace peticion a URL con signo de pregunta recive por QUERT */
     axios(URL + `?email=${email}&password=${password}`).then(({ data })  => {
     const { access } = data;
     setAccess(data);
     access && navigate('/Home');
    });
  }

  useEffect( ( ) => {
      console.log('cliente: useEffect app()');  
      !access && navigate('/'); 
      console.log('cliente: useEffect2 app()'); 
  }, [access])

  const onClose = (id) => {
    // Eliminar el personaje específico del array de personajes
    setCharacters(characters.filter((character) => character.id !== id));
    
    //Despachamos la action 
    dispatch(removeComponentFavorites(id))
  }
  return (
    <div className='container'>       
          { pathname !== '/' && 
            <NavBar 
              onSearch  = { onSearch }
              setAccess = { setAccess }
            /> }        
        <Routes>
          <Route path='/'  element= {< Form login = { login } /> }/>
          <Route  path="/home" element={
            <Cards 
              characters= {characters} 
              onClose = {onClose} /> 
            }
          />
          <Route path="/about" element={<About />}/>
          <Route path='/detail/:id' element={<Detail />}/>
          <Route path='/favorites' element={<Favorites onClose= { onClose }/>}/>
        </Routes>
    </div>
  )
}

export default App