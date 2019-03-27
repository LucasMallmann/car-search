import React, { Component } from 'react';
import './App.css';
import classes from './index.module.sass';
import Layout from './components/Layout/Layout';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Layout>
          Content
        </Layout>
      </div>
    );
  }
}

export default App;
