import { useState } from 'react'; 
import validation from "./validation.js"
import style from './Form.module.css'

/**aqui hago destructuring de las props, y viene login y password */
function Form({ login }) {
  const [ errors, setErrors ] = useState({})
const[ userData, setUserData] = useState ({
email: '' ,
password: ''
});
/** LOS inputs se VALIDAN  adentro del handleChange , porque necesitamos que se 
 * validen cuando los datos vayan ingresando .... */
const handleChange = (event) => {
  setUserData({  /**el objeto se pisó, por eso retomar un nuevo objeto y copiar lo de antes 
  para no perderlo */
      ...userData, /**hago una copia con los 3 puntos  */      
      [event.target.name] : event.target.value
 })

setErrors(validation({
  ...userData,
  [event.target.name]: event.target.value
}))
}
const handleSubmit = (event)=> {
/**preventDefault el hacer click en el boton submit, se recarga
* la pagina , esto evite que la pagina no se está recargando
*/
    event.preventDefault();
    /**el onSubmitt es evento de etiqueta  */
    login(userData);

}

  return (
  <div>
    <form onSubmit={handleSubmit}>
      <h1>Ingreso</h1>
        <label htmlFor='email' className = {style.labela} >email@k</label>
        <input className = {style.search} 
                type='email'  
                name='email'
                placeholder="Escribe tu email" 
                value={userData.email} 
                onChange={handleChange}/>
        
        <label htmlFor='password' className = {style.labela} >password</label>
        <input className = {style.search} 
                type='password' 
                name='password'
                placeholder='' 
                value={userData.password} 
                onChange={handleChange}/>
        
        <button className = {style.boton} text='Submit' >Submit</button>
    </form>
  </div>
  )
}
export default Form