import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id , sku} = useParams();
   console.log(id,sku)
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch("https://dummyjson.com/products/" + id)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, []);
  return (
    <>
      <h1>{product.title}</h1>
      <img
        className="product-thumbnail"
        src={product.thumbnail}
        alt=""
        height={100}
      />
    </>
  );
}
export default ProductDetails;
