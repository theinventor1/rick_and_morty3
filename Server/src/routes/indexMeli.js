/**aqui se usan los require  */
const express = require('express')
const router = express.Router();

const { getCharById } = require('../controllers/getCharById')
const { login } = require('../controllers/login')


const { postFav , deleteFav } = require('../controllers/HandleFavorites')



/**ahora aqui, obtengo de la base de datos  */
router.get('/character/:id', getCharById)
router.get('/login', login)
router.post('/fav', postFav)
router.delete('/fav/:id', deleteFav)

module.exports = router
