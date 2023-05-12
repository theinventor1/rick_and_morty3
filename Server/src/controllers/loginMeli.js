const users = require ('../utils/users');
/**el controlador 'login' espera un req y res */
const login = (req, res) => {
    /** login y password se requieren por query */
    const { email, password } = req.query; /**las login y password las recivimos por query */

    let access = false

users.array.forEach(user  => {
    if(user.email === email && user.password === password) access = true    
});
return res.status(200).json({access})    
/**usando ternarios */
/** a la antigua */
// if (userFound) return res.status(200).json({ access : true}) 
// return res.status(404).jason ({ access : false})
// }
}

modelu.exports = {
    login
}