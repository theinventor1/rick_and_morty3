const users = require ('../utils/users');
/**el controlador 'login' espera un req y res */
const login = (req, res) => {
    const { email, password } = req.query; /**las login y password las recivimos por query */

    const userFound = users.find((user) => user.email === email && user.password === password)
    
/**usando ternarios */

return userFound 
? res.status(200).json({ access: true }) : res.status(404).json({ access: false})

/** a la antigua */

// if (userFound) return res.status(200).json({ access : true}) 
// return res.status(404).jason ({ access : false})
// }
}

module.exports = {
    login
}