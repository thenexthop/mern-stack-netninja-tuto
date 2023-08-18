import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Layouts
import Main from './layouts/Main';

// Pages
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ]
  },  
]);

function App() {  
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  )
}

export default App;