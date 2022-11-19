import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import SearchHandlerContextProvider from './context/SearchContext';
import './index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <SearchHandlerContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SearchHandlerContextProvider>
  </React.StrictMode>
);
