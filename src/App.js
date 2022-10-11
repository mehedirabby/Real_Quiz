import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blogs from './Component/Blogs/Blogs';
import Home from './Component/Home/Home';
import Main from './Component/Main/Main';
import Statics from './Component/Statics/Statics';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/home',
          element:<Home></Home>
        },
        {
          path:'/statics',
          element:<Statics></Statics>
        },
        {
          path:'/blogs',
          element:<Blogs></Blogs>
        }
      ]
    }

  ])
  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
