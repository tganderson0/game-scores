import React from 'react';
import './index.css';
import App from './App';

import ReactDOM from 'react-dom/client';
import { 
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import FiveCrowns from './pages/five-crowns';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/five-crowns',
    element: <FiveCrowns />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
