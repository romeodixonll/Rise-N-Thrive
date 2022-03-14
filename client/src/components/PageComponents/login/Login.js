import { Fragment } from 'react'
import classes from './Login.module.css'

const Login = (props) => {
    return (
        <div className={classes.form}>
            <div>
                <h2>Welcome back!</h2>
                <div className={classes.inputsColumn}>
                <input type="email" placeholder='Email' name="email" value={props.emailInput} onChange={props.setEmailInput}/>
                <input type="password" placeholder='Password' name="password" value={props.passwordInput} onChange={props.setPasswordInput}/>
                </div>
            </div>
            <button type="submit">Login</button>
        </div>
    )
}

export default Login