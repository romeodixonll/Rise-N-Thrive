import { Fragment } from 'react'
import classes from './Signup.module.css'

const Signup = (props) => {
    return (
        <div className={classes.form}>
            <div>
            <h2>Hi! We're happy to have you!</h2>
            <div className={classes.inputsColumn}>
                <div className={classes.nameInputs}>
                    <input type="text" placeholder='First Name' value={props.firstNameInput} onChange={(e)=>props.setFirstNameInput(e.target.value)}/>
                    <input type="text" placeholder='Last Name' value={props.lastNameInput} onChange={(e)=>props.setLastNameInput(e.target.value)}/>
                </div>
                <input type="email" placeholder='Email' value={props.emailInput} onChange={(e)=>props.setEmailInput(e.target.value)}/>
                <input type="password" placeholder='Password' value={props.passwordInput} onChange={(e)=>props.setPasswordInput(e.target.value)}/>
                <input type="password" placeholder='Confirm Password' value={props.passwordConfirmInput} onChange={(e)=>props.setPasswordConfirmInput(e.target.value)}/>
            </div>
            </div>
            <button type="submit">Sign up</button>
        </div>
    )
}

export default Signup