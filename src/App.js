import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import "./App.css";
import AuthLayout from "./Layouts/AuthLayout";
import Login from "./Pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<AuthLayout />} path="/">
          <Route element={<Login />} path="/login" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
