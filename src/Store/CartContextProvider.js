import CartContext from "./cartContext";
import { useReducer } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const reducerfun = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingItem = state.items[existingItemIndex];

    let updatedItems;
    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "REMOVE") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;

    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

const CartContextProvider = (props) => {
  const history = useHistory();

  const initialState = localStorage.getItem("token");

  const [cartState, dispatchCart] = useReducer(reducerfun, defaultCartState);
  const [token, setToken] = useState(initialState);

  const userIsloggedIn = !!token;

  const addItemToCartHandler = (item) => {
    dispatchCart({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCart({ type: "REMOVE", id: id });
  };

  const logInHandler = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
    setInterval(() => {
      setToken(null);
      history.replace("/Login");
    }, 50000);
   
  };
  const logOutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  const cart = {
    token: token,
    isLoggedIn: userIsloggedIn,
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    login: logInHandler,
    logout: logOutHandler,
  };

  return (
    <CartContext.Provider value={cart}>{props.children}</CartContext.Provider>
  );
};

export default CartContextProvider;
