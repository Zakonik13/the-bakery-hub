import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { StoreProvider } from "./utils/GlobalState";
import "bootstrap/dist/css/bootstrap.min.css";
// Components and Pages
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Menu from "./pages/Menu";
import OrderForm from "./pages/OrderForm";
import Cart from "./pages/Cart";
import AdminEditPage from "./pages/AdminEditPage";
import AdminAdd from "./pages/AdminAdd";
import Navigation from "./components/NavBar";
import Cakes from "./components/GalleryItems/Cakes";
import Pies from "./components/GalleryItems/Pies";
import Cookies from "./components/GalleryItems/Cookies";
import More from "./components/GalleryItems/More";
import Footer from "./components/Footer";
import Admin from "./components/Admin";
import Signup from "./pages/Signup";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "/",
});

// const httpLink = createHttpLink({
//   uri: "http://localhost:3001/graphql",
// });

// // const httpLink = createHttpLink({
// //   uri: "https://bakery-hub.herokuapp.com/graphql",
// // });

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });

// const client = new ApolloClient({
//   // Retrieve token from localStorage before each request is made to GraphQL
//   request: (operation) => {
//     const token = localStorage.getItem("id_token");

//     operation.setContext({
//       headers: {
//         authorization: token ? `Bearer ${token}` : "",
//       },
//     });
//   },
//   // Establish a new connection to the GraphQL server using Apollo
//   uri: "/graphql",
// });

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <StoreProvider>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin-add" element={<AdminAdd />} />
            <Route path="/admin-edit" element={<AdminEditPage />} />
            <Route path="/create-new-admin-signup" element={<Signup />} />
            <Route path="/gallery" element={<Gallery />} />
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
