import { useContext, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import classes from "./App.module.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import Nav from "./components/Nav/NavTabs";
import Home from "./pages/Home";
import Algorithm from "./pages/Algorithm";
import Game from "./pages/Game";
import Stocks from "./pages/Stocks";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import Indecision from "./pages/Indecision";

import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./App.css";
// import ColorContextProvider from './store/color-context';
import { ColorContext } from "./store/color-context";


const httpLink = createHttpLink({
  uri: "/graphql",
});


const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const token = localStorage.getItem("id_token")


function App() {
  const [, , theme] = useContext(ColorContext);

  return (
    <div>
      {!token ? (
        <ApolloProvider client={client}>
          <Route>
            <Login />
          </Route>
        </ApolloProvider>
      ) : (
        <main
          className={classes.flex}
          style={{ backgroundColor: theme, transition: "300ms" }}
        >
          <ApolloProvider client={client}>
          <Nav />
          <Route
            render={({ location }) => (
              <TransitionGroup style={{ position: "relative", flexGrow: 1 }}>
                <CSSTransition
                  key={location.key}
                  timeout={1000}
                  classNames="slideUp"
                >
                  <Switch location={location}>
                    <Route path="/" exact>
                      <Redirect to="/home" />
                    </Route>
                    <Route path="/home" exact>
                      <Home />
                    </Route>
                    <Route path="/algorithm" exact>
                      <Algorithm />
                    </Route>
                    <Route path="/game" exact>
                      <Game />
                    </Route>
                    <Route path="/stocks" exact>
                      <Stocks />
                    </Route>
                    <Route path="/indecision" exact>
                      <Indecision />
                    </Route>
                    <Route path="/settings" exact>
                      <Settings />
                    </Route>
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
              
            )}
          />
          </ApolloProvider>
        </main>
      )}
    </div>
  );
}

export default App;
