import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blogs from './Component/Blogs/Blogs';
import Home from './Component/Home/Home';
import Main from './Component/Main/Main';
import Quiz from './Component/Quiz/Quiz';
import Statics from './Component/Statics/Statics';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          loader:()=>fetch('https://openapi.programming-hero.com/api/quiz'),
          element:<Home></Home>
        },
       
        {
          path:'/statics',
          element:<Statics></Statics>
        },
        {
          path:'/blogs',
          element:<Blogs></Blogs>
        },
        {
          path:'/quiz/:quizId',
          loader:async({params})=>{
            // console.log(params.quizId)
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
          },
          
          element:<Quiz></Quiz>
        },
        {
          path:'*',
          element:<h1> 404 Error</h1>
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
