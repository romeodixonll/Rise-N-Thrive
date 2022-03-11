import { Fragment } from 'react'
import classes from './Signup.module.css'

const Signup = () => {
    return (
        <div className={classes.form}>
            <div>
            <h2>Hi! We're happy to have you!</h2>
            <div className={classes.inputsColumn}>
                <div className={classes.nameInputs}>
                    <input type="text" placeholder='First Name' />
                    <input type="text" placeholder='Last Name' />
                </div>
                <input type="email" placeholder='Email' />
                <input type="password" placeholder='Password' />
                <input type="password" placeholder='Confirm Password' />
            </div>
            </div>
            <button type="submit">Login</button>
        </div>
    )
}

export default Signup