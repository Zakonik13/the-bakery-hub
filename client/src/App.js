import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import "bootstrap/dist/css/bootstrap.min.css";
// Components and Pages
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import OrderForm from "./pages/OrderForm";
import Contact from "./pages/Contact";
import AdminEdit from "./pages/AdminEdit";
import Navigation from "./components/NavBar";
import Facebook from "./components/Facebook";
import Cakes from "./components/MenuOptions/Cakes";
import Pies from "./components/MenuOptions/Pies";
import Cupcakes from "./components/MenuOptions/Cupcakes";
import Brownies from "./components/MenuOptions/Brownies";
import Cookies from "./components/MenuOptions/Cookies";
import More from "./components/MenuOptions/More";
import Main from "./components/OrderForms/Main.js";
import Footer from "./components/Footer";
import Admin from "./components/Admin/Admin";
import Signup from "./components/Admin/Signup";

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
        <div>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin-edit" element={<AdminEdit />} />
            <Route path="/create-new-admin-signup" element={<Signup />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/order-form" element={<OrderForm />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/fbpage" element={<Facebook />} />
            <Route path="/cakes" element={<Cakes />} />
            <Route path="/pies" element={<Pies />} />
            <Route path="/cupcakes" element={<Cupcakes />} />
            <Route path="/brownies" element={<Brownies />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/more" element={<More />} />
            <Route path="/main" element={<Main />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
