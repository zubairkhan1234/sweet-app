// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);


import React from 'react';
import { createRoot } from 'react-dom/client';
import Login from './Components/login/Login';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>
);