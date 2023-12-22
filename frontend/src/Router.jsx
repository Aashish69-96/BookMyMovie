import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Login from "./Page/Login";
import Index from "./Page/Index";
import { MovieContextProvider } from "./context/MovieListContext";
import SignUp from "./Page/SignUp";
import MovieIndex from "./Page/MovieIndex";
import { SeatContextProvider } from "./context/SeatContext";
import { BookedSeatContexProvider } from "./context/BookedSeatContext";
import MovieList from "./Page/MovieList";

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
        path: "/Movielist",
        element: <MovieList />,
      },
      {
        path: "/Movie/:id",
        element: (
          <BookedSeatContexProvider>
            <SeatContextProvider>
              <MovieIndex />
            </SeatContextProvider>
          </BookedSeatContexProvider>
        ),
      },
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
