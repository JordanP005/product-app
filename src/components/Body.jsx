import React from "react";

function Body() {
  return (
    <div className="main-body">
      <div className="product-block">
        <div className="image-div">
          {/* <img className="image" src="images\image-product-desktop.jpg" /> */}
        </div>
        <div className="description-div">
          <div className="text-div">
            <p>P E R F U M E</p>
            <h1>Gabrielle Essence Eau De Parfum</h1>
            <p>
              A floral. solar and voluptuos interpretation composed by Oliver
              Polge, Perfumer-Creator for the House of CHANEL
            </p>
            <div className="price-block">
              <h1 style={{ color: "hsl(158, 36%, 37%)" }}>$149.99</h1>
              <p style={{ textDecoration: "line-through" }}>$169.99</p>
            </div>
            <button>
              <img src="images/icon-cart.svg" />
              <p>Add to Cart</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
