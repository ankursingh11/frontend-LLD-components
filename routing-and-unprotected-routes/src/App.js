import "./App.css";
import Profile from "./components/Profile";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Body from "./components/Body";
import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import ProtectedRoute from "./components/UnprotectedRoute";


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/profile",
        element: <ProtectedRoute element = {<Profile />} />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
