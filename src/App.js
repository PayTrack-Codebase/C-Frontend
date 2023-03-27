import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Home from "./Pages/Home";
import "./App.css";
import AuthLayout from "./Layouts/AuthLayout";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Loan from "./Pages/Loan";
import Qr from "./Pages/Qr";
import Customer from "./Pages/Sub Pages/Customer";

function App() {
  const theme = extendTheme({
    styles: {
      global: {
        // styles for the `body`
        body: {
          fontFamily: "Plus Jakarta Sans, sans-serif",
        },
      },
    },
  });
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="loan" element={<Loan />} />
          <Route path="qr" element={<Qr />} />
          <Route path="customer" element={<Customer />} />
          <Route element={<AuthLayout />} path="/auth">
            <Route element={<Login />} path="/auth/login" />
            <Route element={<Register />} path="/auth/register" />
          </Route>
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
