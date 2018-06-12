import React, { Component } from 'react';

import Author from './Author';
import ArticleBody from './ArticleBody';
import Links from './Links';
import Ad from './Ad';
import Footer from './Footer';
import ClickBait from './ClickBait';

import './App.css';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

      <main className="expanded row">
        <div className="large-8 medium-12 columns article">
          <h2 className="article-title">Gold Madness - Fact or Fiction?</h2>
          <Author />
          <ArticleBody />
          <Links />
        </div>
        <aside className="large-4 medium-12 columns">
         <Ad/>
        </aside>
        <ClickBait />
      </main>
      < Footer />
      </div>
    );
  }
}
export default App;