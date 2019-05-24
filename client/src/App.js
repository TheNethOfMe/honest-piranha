import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import store from "./store";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import MainRouter from "./components/routers/MainRouter";

import "./App.scss";

if (localStorage.jwtToken) {
  // check for token in local storage
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));
  // check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = "/login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <div className="wrapper">
              <div className="nav-wrapper">
                <Navbar />
              </div>

              <div className="site-wrapper">
                <div className="container">
                  <MainRouter />
                </div>
              </div>

              <div className="foot-wrapper">
                <Footer />
              </div>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
