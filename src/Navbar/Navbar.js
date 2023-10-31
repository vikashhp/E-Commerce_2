import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import HeaderCartButton from "../Cart/HeaderCartButton";
import { useContext } from "react";
import CartContext from "../Store/cartContext";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import { useState } from "react";

const Navbars = (props) => {
  const authCtx = useContext(CartContext);

  const history = useHistory();

  const Logininfo = authCtx.isLoggedIn;

  const logOutHandler = () => {
    authCtx.logout();

    history.replace("/Home");
    authCtx.items.length =0;
    
  };

  return (
    <Navbar expand="lg" style={{ backgroundColor: "black" }}>
      <Container>
        <NavLink to="/Home">Home</NavLink>
        <NavLink to="/About">About</NavLink>
        <NavLink to="/Contact">Contact</NavLink>
        <NavLink to="/Login">Login</NavLink>
       {Logininfo && <NavLink to="/Products">Products</NavLink>}
        <HeaderCartButton onClick={props.onShow} />
        {Logininfo && <Button onClick={logOutHandler}>Logout</Button>}
      </Container>
    </Navbar>
  );
};

export default Navbars;
