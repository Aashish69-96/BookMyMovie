import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Login from "./Page/Login";
import Index from "./Page/Index";
import { MovieContextProvider } from "./context/MovieListContext";
import SignUp from "./Page/SignUp";
import MovieIndex from "./Page/MovieIndex";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MovieContextProvider>
        <App />
      </MovieContextProvider>
    ),
    children: [
      {
        path: "/",
        element: <Index></Index>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/SignUp",
        element: <SignUp />,
      },
      {
        path:"/Movie/:id",
        element: <MovieIndex/>
      }
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
