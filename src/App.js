import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import "./App.css";
import AuthLayout from "./Layouts/AuthLayout";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<AuthLayout />} path="/auth">
          <Route element={<Login />} path="/auth/login" />
          <Route element={<Register />} path="/auth/register" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
