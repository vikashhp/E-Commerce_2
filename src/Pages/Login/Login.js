import classes from "./Login.module.css";
import { useRef } from "react";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../../Store/cartContext";
import { useState } from "react";

const Login = () => {
  const inputEmailRef = useRef();
  const inputPasswordRef = useRef();
  const history = useHistory();
  const authContext = useContext(CartContext);
  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = inputEmailRef.current.value;
    const enteredPassword = inputPasswordRef.current.value;

    setIsLoading(true);
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCwZv808OhRcTulajFFTsrXP6Qn3bwN-uE",
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errmessage = "Authentication Failed";
            if (data && data.error && data.error.message) {
              errmessage = data.error.message;
            }
            throw new Error(errmessage);
          });
        }
      })
      .then((data) => {
        authContext.login(data.idToken);

        history.replace("/Products");

      

        console.log(data);
        
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <section className={classes.auth}>
      <h1>Login </h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={inputEmailRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={inputPasswordRef}
          />
        </div>
        <div className={classes.actions}>
          <button>Login</button>
          {isLoading && <p>Sending Request...</p>}
        </div>
      </form>
    </section>
  );
};

export default Login;
