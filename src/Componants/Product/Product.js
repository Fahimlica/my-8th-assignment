import React from "react";
import "./product.css";
const Product = (props) => {
  const { handleAddToCart } = props;
  const { name, id, time, age, about, picture, index } = props.product;

  return (
    <div>
      <div className="product">
        <img src={picture} alt=""></img>
        <h3>Name: {name}</h3>
        <h3>Id: {id}</h3>
        <h3>Time: {time}</h3>
        <h3>Index: {index}</h3>
        <h3>Age: {age}</h3>
        <h3>About: {about.slice(0, 40)}...</h3>
        <button onClick={() => handleAddToCart(props.product)}>
          <p>Add to list</p>
        </button>
      </div>
    </div>
  );
};

export default Product;
