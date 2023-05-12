const emailRegexp = new RegExp(/\S+@\S+\.\S+/);

const passwordRegexp = new RegExp(/^[a-z0-9_-]{6,10}$/);

const validation =  (userData) => {
    /**creamos objeto vacio */
    const errors = {}; /**inicio un objeto */

    if (!emailRegexp.test(userData.email))       { errors.email = 'Debe ingresar email valido';   }
    if (!userData.email)                         { errors.email = 'Debes ingresar un email';  }
    if (userData.email.length > 35)              { errors.email = 'debe ser menos a 35';   }
    if (!passwordRegexp.test(userData.password)) { errors.email = 'debe contener letras y numeros...';   }

  return errors
}
export default validation