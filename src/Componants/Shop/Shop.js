import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  //   const diffToast = () => {
  //     toast("Wow so easy!");
  //   };

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };

  let time = 0;
  for (const product of cart) {
    time = time + product.time;
  }

  const [breakTime, setBreakTime] = useState(0);
  const addABreak = (time) => {
    setBreakTime(time);
  };

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}

        <div>
          <h4>(1) How does react work ??</h4>
          <p>
            Ans: React uses a declarative paradigm that makes it easier to
            reason about your application and aims to be both efficient and
            flexible. It designs simple views for each state in your
            application, and React will efficiently update and render just the
            right component when your data changes.
          </p>
        </div>
        <div>
          <h4>(2) what is the diffrence between props and state??</h4>
          <p>
            Ans: Simply put, State is the local state of the component which
            cannot be accessed and modified outside of the component. It's
            equivalent to local variables in a function. Props, on the other
            hand, make components reusable by giving components the ability to
            receive data from their parent component in the form of props.
          </p>
        </div>
        <div>
          <h4>(3) what are the purpose of useffect in react ??</h4>
          <p>
            Ans: Fetching data Reading from local storage Registering and
            deregistering event listeners React’s effects are a completely
            different animal than the lifecycle methods of class-based
            components. The abstraction level differs, too.
          </p>
        </div>
      </div>

      <div className="cart-container">
        <div className="cart">
          <img
            src="https://thumbs.dreamstime.com/b/young-male-cartoon-character-beard-small-smile-brown-tie-trousers-suspenders-isolated-round-button-man-cropped-120287912.jpg"
            alt=""
          ></img>

          <div>
            <h3>Imam Hussain</h3>
            <p>Rajshahi,Bangladesh</p>
          </div>

          <div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type.
            </p>
          </div>

          <div className="weight-list">
            <div>
              <h3>67 Kg</h3>
              <p>Weight</p>
            </div>
            <div>
              <h3>6.7 Ft</h3>
              <p>Height</p>
            </div>
            <div>
              <h3>67 Years</h3>
              <p>Old</p>
            </div>
          </div>
          <h2>Add A Break</h2>

          <div className="time-btn">
            <button id="first-btn" onClick={() => addABreak(10)}>
              10s
            </button>
            <button onClick={() => addABreak(20)}>
              <p>20s</p>
            </button>
            <button onClick={() => addABreak(30)}>
              <p>30s</p>
            </button>
            <button onClick={() => addABreak(40)}>
              <p>40s</p>
            </button>
            <button onClick={() => addABreak(50)}>
              <p>50s</p>
            </button>
          </div>

          <h3>Exercise Details </h3>

          <div>
            <p>Selected items : {cart.length}</p>
            <h4>Exercise Time: {time}s</h4>

            <h4>Break Time:{breakTime}s</h4>
          </div>

          <div className="activity-btn">
            <button className="btn-activity-complited">
              <p>Activity Complited</p>
            </button>
            {/* <ToastContainer></ToastContainer> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
