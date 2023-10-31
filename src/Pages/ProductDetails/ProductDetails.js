import { useParams } from "react-router-dom";
import Details from "./Details";

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
const ProductDetails = () => {
  const parms = useParams();

 const details=productsArr.find(data => data.id === parms.id);
 if(!details){
    return <h1 style={{textAlign:'center'}}>No Data Found</h1>
 }
  return (
    <section style={{ textAlign: "center" }}>
      <h1>ProductDetails Page</h1>
      <Details
        title={details.title}
        imageUrl={details.imageUrl}
        price={details.price}
      />
    </section>
  );
};

export default ProductDetails;
