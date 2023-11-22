import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Login from "./Page/Login";
import Index from "./Page/Index";

const router = createBrowserRouter([
    {
        path:"/",
        element: <App/>,
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
