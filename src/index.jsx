// Import statements at the top
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // Assuming this is the path to your main App component

// Use createRoot
const root = document.getElementById('root');
const reactRoot = createRoot(root);
reactRoot.render(<App/>);
