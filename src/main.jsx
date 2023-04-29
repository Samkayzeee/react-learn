import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LearnUseMemo from './pages/useMemo/Memo';
import LearnUseCallback from './pages/useCallback/Callback';

const router = createBrowserRouter([
  {path: '/', element: <LearnUseMemo />},
  {path: '/callback', element: <LearnUseCallback />}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
