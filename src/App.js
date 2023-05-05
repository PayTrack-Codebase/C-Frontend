import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Home from "./Pages/Home";
import "./App.css";
import AuthLayout from "./Layouts/AuthLayout";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Loan from "./Pages/Loan";
import Qr from "./Pages/Qr";
import PublicLayout from "./Layouts/PublicLayout";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Product from "./Pages/Product";

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
          <Route element={<PublicLayout />} path="/">
            <Route path="/trackpaytechnologies.com" element={<Home />} />
            <Route path="/trackpaytechnologies.com/loan" element={<Loan />} />
            <Route path="/trackpaytechnologies.com/product" element={<Product />} />
            <Route path="/trackpaytechnologies.com/qr" element={<Qr />} />
            <Route path="/trackpaytechnologies.com/contact" element={<Contact />} />
            <Route path="/trackpaytechnologies.com/about" element={<About />} />
          </Route>
          <Route element={<AuthLayout />} path="/trackpaytechnologies.com/auth">
            <Route element={<Login />} path="/trackpaytechnologies.com/auth/login" />
            <Route element={<Register />} path="/trackpaytechnologies.com/auth/register" />
          </Route>
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
