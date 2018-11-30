import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductList from './components/ProductList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Vintage Movie Posters</h1>
        </header>
        <main>
          <section className= "app-product-section">
            <ProductList />
          </section>
        </main>
      </div>


    );
  }
}

export default App;
