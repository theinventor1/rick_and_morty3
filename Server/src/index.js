const express = require('express');
const server = express();
const router = require ('./routes');
const morgan = require('morgan');
const PORT = 3001;
const cors = require('cors')
/**inv ikdniv  */

server.use(cors())

server.use(express.json()); /** formato json de tipo de datos */
server.use(morgan('dev'));

server.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Credentials', 'true');
   res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
   );
   res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, DELETE'
   );
   next();
});

server.use('/rickandmorty', router);

server.listen(PORT, () => {
   console.log('Server raised in portX: ' + PORT);
});