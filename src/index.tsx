import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './font.css';
import { GlobalStyle } from './index.style';
import { ContextProvider } from './components/context/ContextProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);
