import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import ProductsContextProvider from "./context/ProductsContext/ProductsContext.jsx"
import './index.css';
import Root from './root';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ProductsContextProvider>
      <Root />
    </ProductsContextProvider>
  </BrowserRouter>
);
