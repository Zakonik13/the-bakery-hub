import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import { StoreProvider } from "./utils/GlobalState";
import "bootstrap/dist/css/bootstrap.min.css";
// Components and Pages
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import OrderForm from "./pages/OrderForm";
import Cart from "./components/Cart";
import AdminEdit from "./pages/AdminEdit";
import Navigation from "./components/NavBar";
import Cakes from "./components/Cakes";
import Pies from "./components/Pies";
import Cookies from "./components/Cookies";
import More from "./components/More";
import Footer from "./components/Footer";
import Admin from "./components/Admin";
import Signup from "./components/Signup";

const client = new ApolloClient({
  // Retrieve token from localStorage before each request is made to GraphQL
  request: (operation) => {
    const token = localStorage.getItem("id_token");

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
    });
  },
  // Establish a new connection to the GraphQL server using Apollo
  uri: "/graphql",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <StoreProvider>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin-edit" element={<AdminEdit />} />
            <Route path="/create-new-admin-signup" element={<Signup />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/order-form" element={<OrderForm />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/cakes" element={<Cakes />} />
            <Route path="/pies" element={<Pies />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/more" element={<More />} />
          </Routes>
          <Footer />
        </StoreProvider>
      </Router>
    </ApolloProvider>
  );
}

export default App;
