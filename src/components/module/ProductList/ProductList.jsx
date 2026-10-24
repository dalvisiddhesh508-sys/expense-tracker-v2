import { useEffect, useState } from "react";
import "./ProductList.css";
import { Link } from "react-router-dom";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState("");

  const [cartItems, setCartItems] = useState([]);

  function addToCart(product) {
    cartItems.push(product);
    setCartItems([...cartItems]);
  }

  function removeCart(cartItemIndex) {
    // let newCartItems = cartItems.filter((product) => {
    //   return product.id != productId;
    // });
    // setCartItems([...newCartItems]);
    cartItems.splice(cartItemIndex,1)
    setCartItems([...cartItems])
  }

  useEffect(() => {
    console.log("searchText", searchText);
    // if (searchText) {
    //   fetch("https://dummyjson.com/products/search?q=" + searchText)
    //     .then((res) => res.json())
    //     .then((json) => setProducts(json.products));
    // }
  }, [searchText]);

  useEffect(() => {
    console.log("init");
  }, []);

  function searchProduct() {
    if (searchText) {
      fetch("https://dummyjson.com/products/search?q=" + searchText)
        .then((res) => res.json())
        .then((json) => setProducts(json.products));
    } else {
      setProducts([]);
    }
  }

  function searchProductHandler(e) {
    setSearchText(e.target.value);
  }
  return (
    <div className="ProductList">
      <div className="leftSide">
        <input
          type="text"
          name=""
          id="search-product"
          onChange={searchProductHandler}
        />
        <button onClick={searchProduct}>Search</button>
        <div className="product-list-container">
          {products.map((product) => (
            <div className="product-card">
              <img
                className="product-thumbnail"
                src={product.thumbnail}
                alt=""
                height={100}
              />
              <h3 className="product-title"><Link to={`/product/${product.id}/${product.sku}`}>{product.title}</Link></h3>
              <div>
                <div>
                  Price: <strong>{product.price}</strong>
                </div>
              </div>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
      <div className="rightSide">
        {cartItems.map((cartItem,cartItemIndex) => (
          <div key={cartItem.id}>
            <div>{cartItem.title}</div>
            <button onClick={()=>removeCart(cartItemIndex)}>remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
