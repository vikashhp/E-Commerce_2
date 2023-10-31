import { Fragment } from "react";
import Button from "react-bootstrap/esm/Button";
import classes from "./AllProducts.module.css";
import { useRef } from "react";
import { useContext } from "react";
import CartContext from "../../Store/cartContext";
import { Link } from "react-router-dom";

const AllProducts = (props) => {
  const price = `Rs.${props.price}`;
  const quantity = useRef();
  const cartCtx = useContext(CartContext);

  const cartHandler = () => {
    const amount = quantity.current.value;
    const amountinNumber = +amount;

    cartCtx.addItem({
      id: props.id,
      price: props.price,
      amount: amountinNumber,
      imageUrl: props.imageUrl,
      title: props.title,
    });
  };

  return (
    <Fragment>
   
        <div className={classes.AllProducts}>
         
        <Link to={`/Products/${props.id}`}>  <img className={classes.image} src={props.imageUrl} />  </Link>
          <h2>{props.title}</h2>
          <h3>{price}</h3>
          <div>
            <label style={{ fontSize: "30px" }}>Quantity</label>
            <input ref={quantity} />
          </div>

          <Button onClick={cartHandler}>Add To Cart</Button>
        </div>
    
    </Fragment>
  );
};

export default AllProducts;
