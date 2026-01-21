import React from 'react';
import { CartProvider } from './contexts';
import { HomePage } from './pages';
import './App.css';

function App() {
  return (
    <CartProvider>
      <div className="app">
        <header className="app-header">
          <h1>Mini E-Commerce</h1>
        </header>
        <main className="app-main">
          <HomePage />
        </main>
      </div>
    </CartProvider>
  );
}

export default App;
