import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./layout/Root";
import Home from "./pages/HomePage";
import "./assets/css/App.css"
import Login from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: '/login', element: <Login />},
      { path: 'register', element: <RegisterPage />}
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
