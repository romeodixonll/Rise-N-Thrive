import { useState } from 'react'
import { Route, Switch, NavLink } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../../../App.css'

import classes from './LoginOrSignUp.module.css';

import Login from './Login';
import Signup from './Signup';

const LoginOrSignUp = () => {
    const [firstNameInput, setFirstNameInput] = useState('');
    const [lastNameInput, setLastNameInput] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const [passwordConfirmInput, setPasswordConfirmInput] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        
        setFirstNameInput('');
        setLastNameInput('');
        setEmailInput('');
        setPasswordInput('');
        setPasswordConfirmInput('');
    }


    return <div className={classes.card}>
        <h1>Rise N' Thrive</h1>
        <nav className={classes.credentialsToggle}>
            <NavLink to="/login">
                <button>Login</button>
            </NavLink>
            <NavLink to="/signup">
                <button>Sign up</button>
            </NavLink>
        </nav>
        <Route render={({ location }) => (
            <TransitionGroup component={'form'} style={{ position: 'relative' }} className={classes.form} onSubmit={submitHandler}>
                <CSSTransition
                    key={location.key}
                    timeout={150}
                    classNames='fade'>
                    <Switch location={location}>
                        <Route path="/login" exact>
                            <Login
                                setEmailInput={setEmailInput}
                                setPasswordInput={setPasswordInput}
                                emailInput={emailInput}
                                passwordInput={passwordInput}
                            />
                        </Route>
                        <Route path="/signup" exact >
                            <Signup
                                setFirstNameInput={setFirstNameInput}
                                setLastNameInput={setLastNameInput}
                                setEmailInput={setEmailInput}
                                setPasswordInput={setPasswordInput}
                                setPasswordConfirmInput={setPasswordConfirmInput}
                                firstNameInput={firstNameInput}
                                lastNameInput={lastNameInput}
                                emailInput={emailInput}
                                passwordInput={passwordInput}
                                passwordConfirmInput={passwordConfirmInput}
                            />
                        </Route>
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
        )} />


    </div>
}

export default LoginOrSignUp