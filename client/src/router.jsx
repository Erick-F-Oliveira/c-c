import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoutes";
import NotFound from "./pages/NotFound";
import Base from "./pages/Base";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Me from "./pages/Me";
import Lobby from "./pages/Lobby";
import Room from "./pages/Room";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Base />}>
          <Route path="*" element={<NotFound />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route
            path="/me"
            element={
              <PrivateRoute>
                <Me />
              </PrivateRoute>
            }
          />
          <Route
            path="/lobby"
            element={
              <PrivateRoute>
                <Lobby />
              </PrivateRoute>
            }
          />
          <Route
            path="/room/:code"
            element={
              <PrivateRoute>
                <Room />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
