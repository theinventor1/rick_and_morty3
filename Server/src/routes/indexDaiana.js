const { login } = require('../controllers/login')
const { getCharById } = require('../controllers/getCharById')
const { postFav , deleteFav } = require('../controllers/HandleFavorites')

const router = require('express').Router();

/**ahora aqui, obtengo de la base de datos  */
router.get('/character/:id', (req, res) => {

})

router.get('/login', (req, res) => {

})

router.post('/fav', (req, res) => {

})

router.delete('/fav/:id', (req, res) => {

})