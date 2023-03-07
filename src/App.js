import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import "./App.css";
import AuthLayout from "./Layouts/AuthLayout";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Loan from "./Pages/Loan";
import Qr from "./Pages/Qr";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="loan" element={<Loan />} />
        <Route path="qr" element={<Qr />} />
        <Route element={<AuthLayout />} path="/auth">
          <Route element={<Login />} path="/auth/login" />
          <Route element={<Register />} path="/auth/register" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
