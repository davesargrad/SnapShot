import React, { Component } from "react";
import PhotoContextProvider from "./context/PhotoContext";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Item from "./components/Item";
import Search from "./components/Search";
import NotFound from "./components/NotFound";



// The following imports added as i look at retrofitting this app to use material ui
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from "./theme";
import styled from "styled-components";

import Button from '@material-ui/core/Button';

class App extends Component {
  // Prevent page reload, clear input, set URL and push history on submit
  handleSubmit = (e, history, searchInput) => {
    e.preventDefault();
    e.currentTarget.reset();
    let url = `/search/${searchInput}`;
    history.push(url);
  };


  render() {
      console.log("my theme ", theme)
    return (
      <ThemeProvider theme={theme}>
      <CssBaseline />
          <PhotoContextProvider>
          
            <HashRouter basename="/SnapScout">
              <div className="container">
                <Route
                  render={props => (
                    <Header
                      handleSubmit={this.handleSubmit}
                      history={props.history}
                    />
                  )}
                />
                <Switch>
                  <Route
                    exact
                    path="/"
                    render={() => <Redirect to="/mountain" />}
                  />

                  <Route
                    path="/mountain"
                    render={() => <Item searchTerm="mountain" />}
                  />
                  <Route path="/beach" render={() => <Item searchTerm="beach" />} />
                  <Route path="/bird" render={() => <Item searchTerm="bird" />} />
                  <Route path="/food" render={() => <Item searchTerm="food" />} />
                  <Route
                    path="/search/:searchInput"
                    render={props => (
                      <Search searchTerm={props.match.params.searchInput} />
                    )}
                  />
                  <Route component={NotFound} />
                </Switch>
              </div>
            </HashRouter>
          </PhotoContextProvider>
          <Button color="primary" variant="contained">Yay A Button!</Button>
          <Button color="secondary" variant="contained">Yay A Button!</Button>
      </ThemeProvider>
    );
  }
}

export default App;
