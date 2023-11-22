import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Login from "./Page/Login";
import Index from "./Page/Index";
import { MovieContextProvider } from "./context/MovieListContext";

const router = createBrowserRouter([
    {
        path:"/",
        element: <MovieContextProvider><App/></MovieContextProvider> ,
        children:[
            {
                path:"/",
                element:<Index></Index>
            },
            {
            path:"/login",
            element:<Login/>
        },
    
    ]
    }
])

function Router() {
  return <RouterProvider router={router} />;
};

export default Router;
