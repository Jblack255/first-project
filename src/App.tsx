import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <header className="header">
          <nav className="nav main-nav container">
            <ul>
              <li>
                <a className="nav-home" href="main.html">
                  HOME
                </a>
              </li>
              <li>
                <a className="nav-login" href="login.html">
                  LOG IN
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <section className="container">
            <p className="main-section-text">
              <img
                className="main-section-image"
                src="images\db00eab2acc2c526d94f0aebb4aa9e0c.png"
              />
              Spaco: la fina limo. Ĉi tiuj estas la vojaĝoj de la stratŝipo
              Enterprise. Lia kvinjara misio: esplori strangajn novajn mondojn.
              Serĉi novan vivon kaj novajn civilizaciojn. Aŭdacxe iri, kie neniu
              antaŭeniris!
            </p>
          </section>
        </main>
        <footer className="main-footer">
          <p>
            <small>Copyright 2019 by Michael Černý</small>
          </p>
        </footer>
      </React.Fragment>
    );
  }
}

export default App;
