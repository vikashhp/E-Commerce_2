import { Fragment } from "react";
import AllProducts from "./AllProducts";

const productsArr = [
  {
    title: "T-shirt",
    id: "k1",

    price: 400,

    imageUrl:
      "https://tse1.mm.bing.net/th?id=OIP.ParuuUP63rqyRQxyNwlPPwHaHZ&pid=Api&P=0&h=180",
  },

  {
    title: "Jeans",
    id: "k2",

    price: 500,

    imageUrl:
      "https://tse3.mm.bing.net/th?id=OIP.ovRsE2CIV39NVTT6aJY_AwHaHa&pid=Api&P=0&h=180",
  },

  {
    title: "Kurta",
    id: "k3",

    price: 700,

    imageUrl:
      "https://tse4.mm.bing.net/th?id=OIP.NH5AGaOlbYEGxMnJ9YxZOQHaJ3&pid=Api&P=0&h=180",
  },

  {
    title: "Women's Top",
    id: "k4",
    price: 1000,

    imageUrl:
      "https://i5.walmartimages.com/asr/9a4aa998-7c5e-41b6-8825-37315b61e5f1.50c5a56edd5bf39eb5afea20358e2a17.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff",
  },
];

const Products = () => {
  return (
    <Fragment>
      {productsArr.map((item) => (
        <AllProducts
          id={item.id}
          key={item.id}
          title={item.title}
          imageUrl={item.imageUrl}
          price={item.price}
        />
      ))}
    </Fragment>
  );
};

export default Products;
