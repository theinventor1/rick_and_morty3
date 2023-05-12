const { login } = require('../controllers/login')
const { getCharById } = require('../controllers/getCharById')
const { postFav , deleteFav, getAllFav } = require('../controllers/HandleFavorites')


const router = require('express').Router(); /** aqui se usa require  */

/**ahora aqui, obtengo de la base de datos  */
router.get('/character/:id', (req, res) => {
     getCharById(req, res)
})

router.get('/login', (req, res) => {
     login(req, res)
})

router.post('/fav', (req, res) => {
     postFav(req, res);
})

router.get('/daiana', (req, res) => {
     getAllFav(req, res);
})

router.delete('/fav/:id', (req, res) => {
     deleteFav(req, res);
})

module.exports = router;