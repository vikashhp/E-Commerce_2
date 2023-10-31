import { Fragment } from "react";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <Fragment>
      <Fragment>
        <div className={classes.genric}>
          <h1>The Genric</h1>
          <div className={classes.box}>
            <h2>Get Our Latest Album</h2>
          </div>
        </div>
        <h2 style={{ textAlign: "center" }}>Albums List</h2>
        <div className={classes.genrics}>
          <span>
            <img src="https://prasadyash2411.github.io/ecom-website/img/Album%201.png" />
            <h2>Colors</h2>
          </span>
          <span>
            <img src="https://prasadyash2411.github.io/ecom-website/img/Album%202.png" />
            <h2>Black and white Colors</h2>
          </span>
          <span>
            <img src="https://prasadyash2411.github.io/ecom-website/img/Album%203.png" />
            <h2>Yellow and Black Colors</h2>
          </span>
          <span>
            <img src="https://prasadyash2411.github.io/ecom-website/img/Album%204.png" />
            <h2>Blue Color</h2>
          </span>
        </div>
      </Fragment>
    </Fragment>
  );
};

export default Home;
