import React from 'react';

import './App.css';
import Header from './header/header';
import Filter from './filter/filter';
import Content from './content/content';

function App() {
  return (
    <div className="App">
      <Header />
      <section className="container">
        <article>
          <Filter />
        </article>
        < Content / >
      </section>
    </div>
  );
}

export default App;
