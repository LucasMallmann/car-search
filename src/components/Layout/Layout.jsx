import React, { Component } from 'react';
import Header from '../Navigation/Header/Header';
import classes from './Layout.module.sass';

class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <main className={classes.Content}>{this.props.children}</main>
      </React.Fragment>
    );
  }
}

export default Layout;
