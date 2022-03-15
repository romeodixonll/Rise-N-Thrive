import { useState } from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../../../App.css";

import classes from "./LoginOrSignUp.module.css";

import Login from "./Login";
import Signup from "./Signup";

import { useMutation } from "@apollo/client";
import Auth from "../../utils/auth";
import { ADD_USER } from "../../utils/mutations";
import { LOGIN_USER } from "../../utils/mutations";

function LoginOrSignUp(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [addUser] = useMutation(ADD_USER);
  const [login, { error }] = useMutation(LOGIN_USER);

  const submitHandler = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      if (
        formState.email &&
        formState.password &&
        formState.firstName &&
        formState.lastName
      ) {
         
        const mutationResponse = await addUser({
          variables: {
            email: formState.email,
            password: formState.password,
            firstName: formState.firstName,
            lastName: formState.lastName,
          },
        });
        console.log(mutationResponse);
        const token = mutationResponse.data.addUser.token;
        Auth.login(token);
      } else {
          
        const mutationResponse = await login({
          variables: { email: formState.email, password: formState.password },
        });
        const token = mutationResponse.data.login.token;
        Auth.login(token);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(formState);
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className={classes.card}>
      <h1>Rise N' Thrive</h1>
      <nav className={classes.credentialsToggle}>
        <NavLink to="/login">
          <button>Login</button>
        </NavLink>
        <NavLink to="/signup">
          <button>Sign up</button>
        </NavLink>
      </nav>
      <Route
        render={({ location }) => (
          <TransitionGroup
            component={"form"}
            style={{ position: "relative" }}
            className={classes.form}
            onSubmit={submitHandler}
          >
            <CSSTransition key={location.key} timeout={150} classNames="fade">
              <Switch location={location}>
                <Route path="/login" exact>
                  <Login
                    setEmailInput={handleChange}
                    setPasswordInput={handleChange}
                  />
                </Route>
                <Route path="/signup" exact>
                  <Signup
                    setFirstNameInput={handleChange}
                    setLastNameInput={handleChange}
                    setEmailInput={handleChange}
                    setPasswordInput={handleChange}
                    setPasswordConfirmInput={handleChange}
                  />
                </Route>
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </div>
  );
}

export default LoginOrSignUp;

