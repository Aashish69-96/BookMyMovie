import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Login from "./Page/Login";
import Index from "./Page/Index";
import { MovieContextProvider } from "./context/MovieListContext";
import SignUp from "./Page/SignUp";

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
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
