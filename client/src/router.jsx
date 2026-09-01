import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound"
import Base from "./pages/Base";
import Home from "./pages/Home";
import Login from "./pages/Login"

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Base />}>
              <Route path="*" element={<NotFound />}></Route>
          <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
