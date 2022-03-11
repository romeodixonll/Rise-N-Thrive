import { Fragment } from 'react'
import classes from './Login.module.css'

const Login = () => {
    return (
        <div className={classes.form}>
            <div>
                <h2>Welcome back!</h2>
                <div className={classes.inputsColumn}>
                    <input type="email" placeholder='Email' />
                    <input type="password" placeholder='Password' />
                </div>
            </div>
            <button type="submit">Login</button>
        </div>
    )
}

export default Login