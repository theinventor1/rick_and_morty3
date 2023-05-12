const express = require('express');
const server = express(); /**aqui ejecutamos express */
const PORT = 3001;

/**ejecutamos el server para que 'escuche' en el puerto, y luego recive una callback
 * (arrow function)
 */
server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);});