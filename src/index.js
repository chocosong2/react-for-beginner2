import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
    // StrictMode 를 지웠더니 render가 2개 찍히던게 1개로 정상적으로 찍힘
);
