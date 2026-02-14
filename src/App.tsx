import {
  createBrowserRouter,
  Outlet,
  redirect,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Login from "./Pages/LoginPage/Login";
import NavBar from "./Components/NavBar/NavBar";
import BoardingPass from "./Pages/LoginPage/BoardingPass/BoardingPass";

function LayOut() {
  return (
    <>
      <NavBar />
      <div className="content-container">
        <Outlet />
      </div>
    </>
  );
}

function App() {
  const router = createBrowserRouter([
    { path: "", loader: () => redirect("/AirPass") },
    {
      path: "/AirPass",
      element: <LayOut />,
      children: [
        {
          path: "",
          loader: () => redirect("/AirPass/Login"),
        },
        {
          path: "Login",
          element: <Login />,
        },
        {
          path: "BoardingPass",
          element: <BoardingPass />,
        },
      ],
    },
  ]);

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
