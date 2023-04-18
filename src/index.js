import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import Rocket from './pages/Rocket';
import Mission from './pages/Mission';
import Profile from './pages/Profile';
import Error from './components/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Rocket /> },
      { path: '/missions', element: <Mission /> },
      { path: '/profile', element: <Profile /> },
      { path: '*', element: <Error /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
