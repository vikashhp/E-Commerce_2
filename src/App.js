import Navbars from "./Navbar/Navbar";
import { Route, Switch, Redirect } from "react-router-dom";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Products from "./Pages/Products/Products";
import Contact from "./Pages/Contact/Contact";
import { useState } from "react";
import CartPage from "./Cart/CartPage";
import CartContextProvider from "./Store/CartContextProvider";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import NotFound from "./Pages/NotFound/NotFound";


function App() {
  const [cartShown, CartIsShown] = useState(false);

  



  const cartShow = () => {
    CartIsShown(true);
  };
  const cartHider = () => {
    CartIsShown(false);
  };

  return (
    <CartContextProvider>
      <header>
        <Navbars onShow={cartShow} />
      </header>
      <Switch>
        <Route path="/Home">
          <Home />
        </Route>
        <Route path="/About">
          <About />
        </Route>
        <Route path="/Contact">
          <Contact />
        </Route>
        <Route path="/Login">
          <Login />
        </Route>

        <Route path="/Products" exact>
          <Products />
        </Route>

        <Route path="/Products/:id">
          <ProductDetails />
        </Route>
        <Route path="*">
          <Redirect to="/Home" />
        </Route>
      </Switch>
      {cartShown && <CartPage onHide={cartHider} />}
    </CartContextProvider>
  );
}

export default App;
