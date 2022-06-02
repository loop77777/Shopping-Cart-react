import React, { useContext } from "react";
import ProductList from "./Components/products/ProductList";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./Components/layout/Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//pages
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import NewProduct from "./pages/New";
import Show from "./pages/Show";
import Edit from "./pages/Edit";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";

import UserContext from "./store/user-context";

function App() {
  const currentUser = useContext(UserContext);
  const { isLoggedIn } = currentUser;

  return (
    <Layout className="App">
      <ToastContainer hideProgressBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/allproducts" component={ProductList} />

        <Route
          exact
          path="/new"
          render={() => {
            return isLoggedIn === true ? (
              <NewProduct />
            ) : (
              <Redirect to="/login" />
            );
          }}
        />
        <Route exact path="/products/:id" component={Show} />

        <Route
          exact
          path="/products/:id/edit"
          render={() => {
            return isLoggedIn === true ? <Edit /> : <Redirect to="/login" />;
          }}
        />
        <Route exact path="/register" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/cart" component={Cart} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

export default App;
