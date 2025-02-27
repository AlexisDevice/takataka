import React from 'react';
import { Container, createRoot } from 'react-dom/client';
import App from './App';

const root = createRoot(document.getElementById('root') as Container);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
