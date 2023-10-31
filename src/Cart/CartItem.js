import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const price = `Rs.${props.price.toFixed(2)}`;

  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.title}</h2>
        <div className={classes.summary}>
      
          <img className={classes.amount} src={props.imageUrl} />
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        
          </div>
          <div className={classes.actions}>
            <button onClick={props.onRemove}>−</button>
            <button onClick={props.onAdd}>+</button>
          </div>
       
      </div>
    </li>
  );
};



export default CartItem;
