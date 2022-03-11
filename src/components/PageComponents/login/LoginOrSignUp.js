import { Route, Switch, NavLink, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../../../App.css'

import classes from './LoginOrSignUp.module.css';

import Login from './Login';
import Signup from './Signup';

const LoginOrSignUp = () => {

    return <div className={classes.card}>
        <h1>Rise N' Thrive</h1>
        <nav className={classes.credentialsToggle}>
            <NavLink to="/login">
                <button>Login</button>
            </NavLink>
            <NavLink to="/signup">
                <button>SignUp</button>
            </NavLink>
        </nav>
        <Route render={({ location }) => (
            <TransitionGroup component={'form'} style={{position:'relative'}}>
                <CSSTransition
                    key={location.key}
                    timeout={150}
                    classNames='fade'>
                    <Switch location={location}>
                        <Route path="/login" exact>
                            <Login />
                        </Route>
                        <Route  path="/signup" exact >
                            <Signup/>
                        </Route>
                    </Switch>
                </CSSTransition>
            </TransitionGroup>

         )} /> 
       
        
    </div>
}

export default LoginOrSignUp