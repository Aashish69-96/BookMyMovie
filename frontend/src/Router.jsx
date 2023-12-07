import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Login from "./components/Page/Login";
import Index from "./components/Page/Index";
import { MovieContextProvider } from "./context/MovieListContext";
import SignUp from "./components/Page/SignUp";
import Error from "./components/Page/Error";

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
        path:"*",
        element:<Error />,
      }
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
