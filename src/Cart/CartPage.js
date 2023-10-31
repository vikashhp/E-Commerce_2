import { Fragment } from "react";
import Modal from "../UI/Modal";
import classes from "./CartPage.module.css";
import CartContext from "../Store/cartContext";
import { useContext } from "react";
import CartItem from "./CartItem";

const CartPage = (props) => {
  const cartCtx = useContext(CartContext);

  const hasItems = cartCtx.items.length > 0;

  const totalAmount = `Rs.${cartCtx.totalAmount.toFixed(2)}`;

  const cartItemAddHandler=(item)=>{
    cartCtx.addItem({...item,amount:1})

  }

  const cartItemRemoveHandler=(id)=>{
  cartCtx.removeItem(id)
  }



  const cartItems = cartCtx.items.map((item) => (
    <CartItem
      title={item.title}
      imageUrl={item.imageUrl}
      price={item.price}
      key={item.id}
      amount={item.amount}
      onAdd={cartItemAddHandler.bind(null,item)}
      onRemove={cartItemRemoveHandler.bind(null,item.id)}
    />
  ));

  return (
    <Fragment>
      <Modal onHidden={props.onHide}>
        .
        <div className={classes['cart-items']}>
          <h1 style={{ textAlign: "center" }}>CartItems</h1>
          {cartItems}
          <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
          </div>
          <div className={classes.actions}>
            {hasItems && <button>Buy</button>}
            <button onClick={props.onHide}>Close</button>
          </div>
        </div>
      </Modal>
    </Fragment>
  );
};

export default CartPage;
