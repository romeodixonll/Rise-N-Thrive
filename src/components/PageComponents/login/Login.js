import { Fragment } from 'react'
import classes from './Login.module.css'

const Login = (props) => {
    return (
        <div className={classes.form}>
            <div>
                <h2>Welcome back!</h2>
                <div className={classes.inputsColumn}>
                    <input type="email" placeholder='Email' value={props.emailInput} onChange={(e)=>props.setEmailInput(e.target.value)}/>
                    <input type="password" placeholder='Password' value={props.passwordInput} onChange={(e)=>props.setPasswordInput(e.target.value)} />
                </div>
            </div>
            <button type="submit">Login</button>
        </div>
    )
}

export default Login