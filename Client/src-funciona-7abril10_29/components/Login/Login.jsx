import React from 'react'
import style from './Login.module.css'
let inputs = {
    email: "algo@tucasa.cl",
    password: "1234"
}

function Login() {
return (
  <div className={style.form}>
    <form className={style.container} action="">
        <label>Email: </label>
        <input type="text" name="email" value={inputs.email} placeholder='' ></input>
        <p className="" >ERROR_$404</p>
        <label>Password: </label>
        <input type="text" name="password" value={inputs.password} placeholder=''></input>
        <button className={style.botontrok} >BUTTON</button>
    </form>

 </div>
)
}
export default Login
