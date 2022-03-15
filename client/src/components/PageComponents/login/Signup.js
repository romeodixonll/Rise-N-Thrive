import { Fragment } from 'react'
import classes from './Signup.module.css'

const Signup = (props) => {
    return (

        <div className={classes.form}>
            <div>
                
            <h2>Hi! We're happy to have you!</h2>
            <div className={classes.inputsColumn}>
                <div className={classes.nameInputs}>
                    <input type="text" placeholder='First Name' name="firstName" value={props.firstNameInput} onChange={props.setFirstNameInput}/>
                    <input type="text" placeholder='Last Name' name="lastName" value={props.lastNameInput} onChange={props.setLastNameInput}/>
                </div>
                <input type="email" placeholder='Email' name="email" value={props.emailInput} onChange={props.setEmailInput}/>
                <input type="password" placeholder='Password' name="password" value={props.passwordInput} onChange={props.setPasswordInput}/>
                <input type="password" placeholder='Confirm Password' name="confirmPassword" value={props.passwordConfirmInput} onChange={props.setPasswordConfirmInput}/>
            </div>
            </div>
            <button type="submit">Sign up</button>
        </div>
    )
}

export default Signup

